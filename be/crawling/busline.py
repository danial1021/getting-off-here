from bs4 import BeautifulSoup
import pymongo
import requests
import json

client = pymongo.MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false')
db = client.GOH
collection1 = db.buses
collection2 = db.buslines

line = collection1.find()
for i in line:
    soup = BeautifulSoup(requests.get("http://api.gwangju.go.kr/xml/lineStationInfo?serviceKey=tEA2cLH8Amh%2FxeavdbPj1Kz0%2FL4bC6eYyo%2BbF2V8A28VE7%2FFl%2F%2Fsyd9OnPL03g40YafaSbb7rYYPqYs0vhd49A%3D%3D&LINE_ID={}&".format(i['lineId'])).text, 'lxml')
    busstop = soup.find_all('busstop')
    try:
        line = busstop[0].find('line_name').text.replace(".", "")
        busline = {}
        for j in busstop:
            try:
                busline[str(j.find('busstop_name').text).replace(".", "")]=str(j.find('ars_id').text)+"/"+str(j.find('busstop_id').text)
            except:
                busline[str(j.find('busstop_name').text).replace(".", "")]="9999"+"/"+str(j.find('busstop_id').text)
        result={
            'lines' : {
                line: busline
            }
        }
        collection2.insert_one(result)    
    except:
        pass