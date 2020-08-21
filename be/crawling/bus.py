from bs4 import BeautifulSoup
import pymongo
import requests
import json
client = pymongo.MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false')
db = client.GOH
collection = db.buses

soup = BeautifulSoup(requests.get("http://api.gwangju.go.kr/xml/lineInfo?serviceKey=tEA2cLH8Amh%2FxeavdbPj1Kz0%2FL4bC6eYyo%2BbF2V8A28VE7%2FFl%2F%2Fsyd9OnPL03g40YafaSbb7rYYPqYs0vhd49A%3D%3D&").text, 'lxml')
lists = soup.find_all('line')
for i in lists:
    result = {
        "lineId" : str(i.find("line_id").text),
        "lineName" : str(i.find('line_name').text),
        "dir_up_name" : str(i.find('dir_up_name').text),
        "dir_down_name" : str(i.find('dir_down_name').text),
        "line_kind" : str(i.find('line_kind').text)
    }
    try:
        result['first_run_time'] = str(i.find('first_run_time').text)
    except:
        result['first_run_time'] = None
    try:
        result['last_run_time'] = str(i.find('last_run_time').text)
    except:
        result['last_run_time'] = None
    try:
        result['run_interval'] = str(i.find('run_interval').text)
    except:
        result['run_interval'] = None
    if collection.find_one({"lineId": result['lineId']}):
        continue
    collection.insert_one(result)