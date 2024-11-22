from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/calculate', methods=['POST'])
def calculate():
    print("Requête reçue : ", request.form)
    number1 = int(request.form['number1'])
    number2 = int(request.form['number2'])
    operation = request.form['operation']

    if operation == 'addition':
        result = number1 + number2
    elif operation == 'soustraction':
        result = number1 - number2
    elif operation == 'multiplication':
        result = number1 * number2
    elif operation == 'division':
        result = number1 / number2
    else:
        return jsonify({"error": "Invalid operation"}), 400

    return jsonify({"result": result})

@app.route('/api/result/<int:id>', methods=['GET'])
def get_result(id):
    return jsonify({"result": id})