var express = require('express');
var path = require("path")
var router = express.Router();
const convert = require('xml-js');
const request = require('request');

const HOST = 'http://api.gwangju.go.kr/xml/arriveInfo'
const SERVICE_KEY = 'tEA2cLH8Amh%2FxeavdbPj1Kz0%2FL4bC6eYyo%2BbF2V8A28VE7%2FFl%2F%2Fsyd9OnPL03g40YafaSbb7rYYPqYs0vhd49A%3D%3D'

router.get('/', (req, res, next)=> { //BUSSTOP_ID라는 변수로 정류장 정보 중에서 busstop_id 보내주시면 됩니다.
    const BUSSTOP_ID = req.query.BUSSTOP_ID
    var coming_bus = []
    var requestUrl = `${HOST}?ServiceKey=${SERVICE_KEY}&BUSSTOP_ID=${BUSSTOP_ID}`   
    function getHeaders(){
        return new Promise(resolve=>{
            request({
            url: requestUrl,
            method: 'GET'
            }, function (error, response, body) {
                var coming_bus = []
                var result = body
                var arriveInfo = JSON.parse(convert.xml2json(result, {compact: true, spaces: 4}));
                try{
                    for (var i in arriveInfo['ns2:ARRIVE_INFO']['ARRIVE_LIST']['ARRIVE']){
                        coming_bus.push({LINE_NAME:arriveInfo['ns2:ARRIVE_INFO']['ARRIVE_LIST']['ARRIVE'][i].LINE_NAME._text, REMAIN_MIN:arriveInfo['ns2:ARRIVE_INFO']['ARRIVE_LIST']['ARRIVE'][i].REMAIN_MIN._text, ARRIVE_FLAG:arriveInfo['ns2:ARRIVE_INFO']['ARRIVE_LIST']['ARRIVE'][i].ARRIVE_FLAG._text, KEY:i})
                        }
                    }
                catch{
                    try{
                        coming_bus.push({LINE_NAME:arriveInfo['ns2:ARRIVE_INFO']['ARRIVE_LIST']['ARRIVE'].LINE_NAME._text, REMAIN_MIN:arriveInfo['ns2:ARRIVE_INFO']['ARRIVE_LIST']['ARRIVE'].REMAIN_MIN._text, ARRIVE_FLAG:arriveInfo['ns2:ARRIVE_INFO']['ARRIVE_LIST']['ARRIVE'].ARRIVE_FLAG._text, KEY:0})
                    }
                    catch{
                        coming_bus.push({})
                    }
                }
                resolve(coming_bus)
            });  
        })
    }
    getHeaders()
    .then(function(result){
        res.send({coming_bus:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})


module.exports = router;