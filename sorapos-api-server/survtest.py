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
        total_amount = total_amount + json['items'][i]["price"]
    # 暫定コマンド　そのうちjsonのデータ構造を変更します
    json['store_id']="netw12VFfixARNe5HhjAPog8sfFgNdZRL2Scfx3VyME5vhdEHfF"
    command = "{\"jsonrpc\":\"1.0\", \"method\":\"sendmoney\",\"params\":[\""+json['store_id']+"\", [{\"address\":\""+ json['store_id'] +"\", \"amount\":" + str(total_amount) + ", \"message\":\"" + str(json['items']) + "\"}]]}"
    return command

with open('paytest.json') as f:
    df = json.load(f)
print(payment(df))

