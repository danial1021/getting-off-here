var express = require('express');
var router = express.Router();
const User = require("../model/user")
const jwt = require("jsonwebtoken")
const crypto = require('crypto')

router.post('/login', function(req, res, next) { //아이디 비밀번호 받음
  const cipher = crypto.createCipher('aes-256-cbc', process.env.SALT);
  const u = req.body
  u.password = cipher.update(u.password, 'utf8', 'base64');
  u.password += String(cipher.final('base64'));
  User.find({id:u.id, pw: u.password})
    .then((user)=>{
      console.log(user)
      const token = jwt.sign({
      id : user[0].id,
      name : user[0].name,
    }, process.env.JWT_SECRET, {
      expiresIn: '10d', // 10분
      issuer: 'getting-off-here',  //발급자
    });
    res.send({user:{id: user[0].id, name:user[0].name}, token:token});  //id, 이름 유저정보로, token 보냄
    })
    .catch((e)=>{
      console.log(e)
    })
});

router.post('/register', function(req, res, next) { //회원가입정보 보내주세요
  const cipher = crypto.createCipher('aes-256-cbc', process.env.SALT);
  const u = req.body;
  console.log(u)
  user = new User({id:u.id, pw:u.pw, name:u.name, pword:u.pword, answer:u.answer, date: new Date(u.year, u.month-1, u.day), phonenumber:u.phonenumber })
  console.log(u)
  user.pw = cipher.update(user.pw, 'utf8', 'base64');
  user.pw += String(cipher.final('base64'));
  user.save((err, data)=>{
    console.log(data)
    if(err){
        console.log(1);
    }else{
      res.send({success:true})
    }
  })
});

router.get("/login/id-check", (req, res, next)=>{  //아이디 중복 확인
  const u = req.query;
  User.findOne({id : u.id}) //이친구는 일단 무조건 
    .then((user)=>{
      console.log(user)
      if(user == null) return res.send({ isok : true });  //아이디 중복 없으면 isok에 true를 보냄
      res.send({isok:false}); //아이디 중복이 확인 되면 isok에 false를 보냄
    })
    .catch((e) => {
      res.send({ isok: false, msg: e.message })
    })
});

router.post("/idSearch", (req, res, next)=>{
  console.log(req.body)
  const u = req.body
  User.findOne({name : u.name, date: new Date(u.year, u.month-1, u.day), phonenumber:u.phonenumber })
    .then((user)=>{
      console.log(user)
      if(user != null) return res.send({ id: user.id });
      res.send({id:"발견되지 않음"});
    })
    .catch((e) => {
      res.send({ id:"발견되지 않음", msg: e.message })
    })
});

router.post("/pwSearch", (req, res, next)=>{
  const decipher = crypto.createDecipher('aes-256-cbc', process.env.SALT);
  console.log(req.body)
  const u = req.body;
  User.findOne({ id:u.id, pword:u.pword, answer:u.answer })
    .then((user)=>{
      console.log(user)
      let result2 = decipher.update(user.pw, 'base64', 'utf8');
      result2 += decipher.final('utf8');
      if(user != null) return res.send({ password: result2 });
      res.send({password: "운영자에게 문의 하세요."});
    })
    .catch((e) => {
      res.send({ password: "운영자에게 문의 하세요.", msg: e.message })
    })
});
module.exports = router;
