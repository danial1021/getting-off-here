var express = require('express');
var path = require("path")
var router = express.Router();
const convert = require('xml-js');
const request = require('request');

const HOST = 'http://api.gwangju.go.kr/xml/arriveInfo'
const SERVICE_KEY = 'tEA2cLH8Amh%2FxeavdbPj1Kz0%2FL4bC6eYyo%2BbF2V8A28VE7%2FFl%2F%2Fsyd9OnPL03g40YafaSbb7rYYPqYs0vhd49A%3D%3D'
const BUSSTOP_ID = 2873
var requestUrl = `${HOST}?ServiceKey=${SERVICE_KEY}&BUSSTOP_ID=${BUSSTOP_ID}`
request.get(requestUrl, (err, res, body)=> {
   if(err) {
        console.log(`err => ${err}`)
    }
  else {
    if(res.statusCode == 200) {
         var result = body
        console.log(`body data => ${result}`)
        var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
        console.log(`xml to json => ${xmlToJson}`)
       }
   }
})

module.exports = router;