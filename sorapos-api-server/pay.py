from urllib import response
import json
import requests
from crypt import methods
from flask import Flask, request
from flask_cors import CORS


def main()
    jstring_a = '{"data_flag":"item","item_category":"foods","item_name":"超美味しい！驚きの大増量キャンぺーンペペロンチーノ8億7000万キログラム","price":11500,"expiration_date":"2022/09/11","weight":99999,"JANcode":4902885008545}'
    jstring_b = '{"data_flag":"item","item_category":"foods","item_name":"超美味しい！驚きの大増量キャンぺーンペペロンチーノ8億7000万キログラム","price":11500,"expiration_date":"2022/09/11","weight":99999,"JANcode":4902885008545}'
    jstring_c = '{"data_flag":"item","item_category":"foods","item_name":"超美味しい！驚きの大増量キャンぺーンペペロンチーノ8億7000万キログラム","price":11500,"expiration_date":"2022/09/11","weight":99999,"JANcode":4902885008545}'
    
    jdict = []

    