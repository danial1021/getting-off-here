import pymongo

client = pymongo.MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false')
db = client.GOH
collection = db.buslists
collection2 = db.buslines
collection3 = db.busstops

lines = list(collection2.find())
busstops = list(collection3.find())

for busstop in busstops:
    result = {}
    result[busstop['busstop_id']] = []
    for line in lines:
        for j in list(line['lines'][list(line['lines'].keys())[0]].keys()):
            if j == busstop['busstop_name']:
                result[busstop['busstop_id']].append(list(line['lines'].keys())[0])
    collection.insert_one(result)

