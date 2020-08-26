var express = require('express');
var path = require("path")
var router = express.Router();
const Busstop = require("../model/busStop")

String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

//정류장 목록 검색

router.get('/', (req, res, next)=>{ //busstop_name 변수로 정류장 이름 보내주세요
    req.query.busstop_name = req.query.busstop_name.replaceAll(" ", "").toUpperCase()
    console.log(req.query.busstop_name)
    if (req.query.busstop_name==""){
        var bus=[]
        res.send({busStop:bus})
    }
    console.log(Number(req.query.busstop_name))
    if(isNaN(Number(req.query.busstop_name))==false && req.query.busstop_name.length>3){
        console.log("번호")
        Busstop.find({ars_id:{$regex:String(req.query.busstop_name)}})
        .then((bus)=>{
            res.send({busStop:bus.slice(0, 20)})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    else{
        console.log("이름")
        Busstop.find({busstop_name:{$regex:String(req.query.busstop_name)}})
        .then((bus)=>{
            res.send({busStop:bus.slice(0, 10)})
        })
        .catch((err)=>{
            console.log(err)
        })
    }   
})



module.exports = router;