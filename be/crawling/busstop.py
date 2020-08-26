from bs4 import BeautifulSoup
import pymongo
import requests
import json
client = pymongo.MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false')
db = client.GOH
collection = db.busstops    

soup = BeautifulSoup(requests.get('http://api.gwangju.go.kr/xml/stationInfo?serviceKey=tEA2cLH8Amh%2FxeavdbPj1Kz0%2FL4bC6eYyo%2BbF2V8A28VE7%2FFl%2F%2Fsyd9OnPL03g40YafaSbb7rYYPqYs0vhd49A%3D%3D&').text, 'lxml')
busstop = soup.find_all('station')
for i in busstop:
    result = {}
    result['busstop_id'] = i.find('busstop_id').text
    result['busstop_name'] = i.find('busstop_name').text
    try:
        result['name_e'] = i.find('name_e').text
    except:
        result['name_e'] = None
    result['longitude'] = i.find('longitude').text
    result['latitude'] = i.find('latitude').text
    try:
        result['ars_id'] = i.find('ars_id').text
    except:
        result['ars_id'] = '9999'
    try:
        result['next_busstop'] = i.find('next_busstop').text
    except:
        result['next_busstop'] = None
    collection.insert_one(result)       
