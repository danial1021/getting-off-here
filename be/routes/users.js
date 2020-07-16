var express = require('express');
var router = express.Router();
const User = require("../model/user")

router.post('/login', function(req, res, next) { //아이디 비밀번호 받음
  console.log(req.body)
  User.find()
  .where('id').equals(req.body.id)
  token = "4123412341324"
  res.send({user:{id: id, name:name}, token:token});  //id, 이름 유저정보로, token 보냄
});

router.post('/register', function(req, res, next) { //회원가입정보 보내주세요
  const u = req.body;
  User.create(u);
  .then((r)=>{
    res.send({ success: true }); //성공하면 true
  })
  .catch((e)=>{
    res.send({ success: false, msg: e.message }) //실패시 false 보내고 에러 메세지
  })
});

router.post("/login/id-check", (req, res, next)=>{  //아이디 중복 확인
  const u = req.body;
  User.findOne({id : u.id})
  .then((user)=>{
    if(user == {}) return res.status(400).send({ isok : 'X'});  //아이디 중복이 확인 되면 isok에 X를 보냄
    res.send({isok:"O"}); //아이디 중복 없으면 isok에 O를 보냄
  })
});

module.exports = router;
