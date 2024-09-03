from flask import request, jsonify
from config import app, db

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify(message="Hello World!"), 201
