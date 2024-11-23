import json
import pika
import redis

# Configuration de RabbitMQ et Redis
RABBITMQ_HOST = 'localhost'
REDIS_HOST = 'localhost'
REDIS_PORT = 6379

# Connexion à RabbitMQ
rabbitmq_connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
rabbitmq_channel = rabbitmq_connection.channel()
rabbitmq_channel.queue_declare(queue='calculations')

# Connexion à Redis
redis_client = redis.StrictRedis(host=REDIS_HOST, port=REDIS_PORT, decode_responses=True)

def calculate(ch, method, properties, body):
    
    message = json.loads(body)
    calculation_id = message['id']
    number1 = message['number1']
    number2 = message['number2']
    operation = message['operation']

   
    try:
        if operation == 'addition':
            result = number1 + number2
        elif operation == 'soustraction':
            result = number1 - number2
        elif operation == 'multiplication':
            result = number1 * number2
        elif operation == 'division':
            result = number1 / number2
        else:
            result = "Invalid operation"
    except Exception as e:
        result = f"Error: {str(e)}"

    redis_client.set(calculation_id, result)

    ch.basic_ack(delivery_tag=method.delivery_tag)

# Consommer les messages de la file
rabbitmq_channel.basic_consume(queue='calculations', on_message_callback=calculate)

print("Waiting for messages. To exit press CTRL+C")
rabbitmq_channel.start_consuming()
