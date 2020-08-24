var express = require('express');
var path = require("path")
var router = express.Router();
const convert = require('xml-js');
const request = require('request');

const HOST = 'http://api.gwangju.go.kr/xml/arriveInfo'
const SERVICE_KEY = 'tEA2cLH8Amh%2FxeavdbPj1Kz0%2FL4bC6eYyo%2BbF2V8A28VE7%2FFl%2F%2Fsyd9OnPL03g40YafaSbb7rYYPqYs0vhd49A%3D%3D'

router.get('/', (req, res, next)=>{ //BUSSTOP_ID라는 변수로 정류장 정보 중에서 busstop_id 보내주시면 됩니다.
    const BUSSTOP_ID = req.body.BUSSTOP_ID
    var requestUrl = `${HOST}?ServiceKey=${SERVICE_KEY}&BUSSTOP_ID=${BUSSTOP_ID}`
    request.get(requestUrl, (err, res, body)=> {
    if(err) {
        console.log(`err => ${err}`)
        }
    else {
        if(res.statusCode == 200) {
            var result = body
            var arriveInfo = JSON.parse(convert.xml2json(result, {compact: true, spaces: 4}));
            console.log(arriveInfo['ns2:ARRIVE_INFO']['ARRIVE_LIST']['ARRIVE'][0])
            }
        }
    })
})


module.exports = router;