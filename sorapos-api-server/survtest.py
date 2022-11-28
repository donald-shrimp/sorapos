from urllib import response
import json
import requests
from crypt import methods
from flask import Flask, request
from flask_cors import CORS

def payment(json):
    # フロントからもらってきたウォレットIDと商品情報をこねこねしてコマンドを作る
    total_amount = 0
    for i in range(len(json['items'])):
        total_amount = total_amount + json['items'][i]['price']

    command = "{\"jsonrpc\":\"1.0\", \"method\":\"sendmoney\",\"params\":[\"送金元id\", [{\"address\":\"送金先id\", \"amount\":30, \"message\":\"ここにメッセージを書く\"}]]}"
    return total_amount

with open('paymentex.json') as f:
    df = json.load(f)
print(payment(df))

