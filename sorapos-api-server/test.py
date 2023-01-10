from urllib import response
import json
import requests
from crypt import methods
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    supports_credentials=True
)
@app.route('/', methods=['POST'])
def send_json():
    print(request.json)
    res = requests.post(
        "http://133.43.7.131:8080",data = json.dumps(request.json)
    )
    print(res.text)
    return res.text

app.run(port=8000, debug=True)