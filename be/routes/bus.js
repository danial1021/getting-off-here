var express = require('express');
var router = express.Router();
const Bus = require("../model/bus")
const Busline = require('../model/busline')

router.get('/', function(req, res, next) { //버스 목록 조회(검색할때 ?) 버스이름 예: 진월75 랑 각 종점 와 노선id를 보냄
    var buses = [];
    Bus.find()
    .then((bus)=>{
        for(var i =0;i<bus.length;i++){
            if(bus[i].lineName[0].includes(req.query.busname)){
                buses.push(bus[i])
            }
        }
        res.send({bus:buses})
    })
});

router.get('/busstop', function(req, res, next) { //버스가 다니는 버스 정류장 조회 버스가 다니는 정류장 목록을 보내줌 
    Busline.find()
    .then((busline)=>{
        var busstops = busline[i]['lines'][0][req.query.busname]
        res.send(busstops)
    })
});


module.exports = router;