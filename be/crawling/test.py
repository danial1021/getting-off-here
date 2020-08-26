import pymongo

client = pymongo.MongoClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false')
db = client.GOH
collection = db.busstops
lendic={1:0, 2:0, 3:0, 4:0, 5:0}
busstop = collection.find()
for i in busstop:
    if len(i['ars_id']) == 1:
        lendic[1]+=1
    if len(i['ars_id']) == 2:
        lendic[2]+=1
    if len(i['ars_id']) == 3:
        lendic[3]+=1
    if len(i['ars_id']) == 4:
        lendic[4]+=1
    if len(i['ars_id']) == 5:
        lendic[5]+=1
print(lendic)

