var express = require('express');
var path = require("path")
var router = express.Router();
const Busstop = require("../model/busStop")

//정류장 목록 검색

router.get('/', (req, res, next)=>{ //busstop_name 변수로 정류장 이름 보내주세요
    console.log(req.query.busstop_name)
    if(Number(req.query.busstop_name)==NaN){
        Busstop.find({ars_id:{$regex:String(req.query.busstop_name)}})
        .then((bus)=>{
            res.send({busStop:bus})
        })
    }
    else{
        Busstop.find({busstop_name:{$regex:String(req.query.busstop_name)}})
        .then((bus)=>{
            res.send({busStop:bus})
        })
    }
})



module.exports = router;