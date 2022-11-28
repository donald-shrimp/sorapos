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

def send_json(json):
    # print(request.json)
    res = requests.post(
        "http://133.43.7.131:1234",data = json
    )
    print(res.text)
    return res.text

# @app.route('/', methods=['POST'])
def singn_in():
    # 新規登録するときは新しくコマンドで新規ウォレットを作成し、帰ってきたウォレットIDを新規アカウントと紐づける
    command = "{\"jsonrpc\":\"1.0\", \"method\":\"generateaddress\"}"
    # ウォレットIDが返ってくるよ
    wallet_id = send_json(json.dump(command))
    # DBかなんかに登録してあげたい

    return 

@app.route('/payment', methods=['POST'])
def payment():
     # フロントからもらってきたウォレットIDと商品情報をこねこねしてコマンドを作る
    total_amount = 0
    for i in range(len(json['items'])):
        total_amount = total_amount + json['items'][i]["price"]
    # 暫定コマンド　そのうちjsonのデータ構造を変更します
    json['store_id']="netw12VFfixARNe5HhjAPog8sfFgNdZRL2Scfx3VyME5vhdEHfF"
    command = "{\"jsonrpc\":\"1.0\", \"method\":\"sendmoney\",\"params\":[\""+json['store_id']+"\", [{\"address\":\""+ json['store_id'] +"\", \"amount\":" + str(total_amount) + ", \"message\":\"" + str(json['items']) + "\"}]]}"
    # トランザクションIDが返ってくるのでよしなに使う
    return send_json(json.dump(command))

@app.route('/get_balance', methods=['GET'])
def get_balance():
    # ウォレットIDをもらってくる
    wallet_id = request.args.get("wallet_id")
    # コマンドこねこね
    command="{\"jsonrpc\":\"1.0\", \"method\":\"getbalance\", \"params\":\"" + wallet_id + "\"}"
    # jsonに整形したものを送信　戻り値例　balace : 1000200　こんな感じなので整形してあげたい
    return send_json(json.dump(command))





app.run(port=8000, debug=True)