var express = require('express');
var router = express.Router();
const User = require("../model/user")
const jwt = require("jsonwebtoken")

router.post('/login', function(req, res, next) { //아이디 비밀번호 받음
  const u = req.body
  User.find({id:u.id, pw: u.password})
    .then((user)=>{
      const token = jwt.sign({
      id : user[0].id,
      name : user[0].name,
    }, process.env.JWT_SECRET, {
      expiresIn: '10m', // 일주일
      issuer: 'getting-off-here',  //발급자
    });
    console.log(token)
    res.send({user:{id: user[0].id, name:user[0].name}, token:token});  //id, 이름 유저정보로, token 보냄
    })
    .catch((e)=>{
      console.log(e)
    })
});

router.post('/register', function(req, res, next) { //회원가입정보 보내주세요
  const u = req.body;
  user = new User({id:u.id, pw:u.pw, name:u.name, date: new Date(u.year, u.month, u.day), phonenumber:u.phonenumber })
  user.save((err, data)=>{
    console.log(data)
    if(err){
        console.log(1);
    }else{
      res.send({success:true})
    }
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
