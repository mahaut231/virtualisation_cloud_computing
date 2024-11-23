import json
import pika
import redis
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Configuration de CORS pour autoriser les requêtes depuis n'importe quelle origine (Propostion par ChatGPT afin de faire fonctionner l'API avec hoppscotch)
CORS(app)

# Configuration de RabbitMQ et Redis
RABBITMQ_HOST = 'localhost'
REDIS_HOST = 'localhost'
REDIS_PORT = 6379

redis_client = redis.StrictRedis(host=REDIS_HOST, port=REDIS_PORT, decode_responses=True)

# Connexion à RabbitMQ
rabbitmq_connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
rabbitmq_channel = rabbitmq_connection.channel()
rabbitmq_channel.queue_declare(queue='calculations')

# Nom de la clé Redis pour le compteur d'IDs
ID_COUNTER_KEY = "calculation_id_counter"

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/calculate', methods=['POST'])
def calculate():
    
    #utilisation d'un json à la place de request.form pour une utilisation plus naturelle
    data = request.get_json()
    number1 = data['number1']
    number2 = data['number2']
    operation = data['operation']

    # Génération d'un ID entier unique avec Redis
    calculation_id = redis_client.incr(ID_COUNTER_KEY)

    # Création du message à envoyer à RabbitMQ
    message = {
        "id": calculation_id,
        "number1": number1,
        "number2": number2,
        "operation": operation
    }

    # Publication du message dans RabbitMQ
    rabbitmq_channel.basic_publish(exchange='', routing_key='calculations', body=json.dumps(message))

    return jsonify({"id": calculation_id, "message": "Calculation task submitted successfully"})

@app.route('/api/result/<int:id>', methods=['GET'])
def get_result(id):
    # Récupération du résultat dans Redis
    result = redis_client.get(id)
    if result is None:
        return jsonify({"error": "Ce résultat n'est pas présent dans notre base"}), 404

    return jsonify({"id": id, "result": result})
