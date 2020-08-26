var express = require('express');
var router = express.Router();
const User = require("../model/user")
const jwt = require("jsonwebtoken")
const crypto = require('crypto')

router.post('/login', function(req, res, next) { //아이디 비밀번호 받음
  const u = req.body
  u.password = crypto.createHash("sha512").update(u.password + process.env.SALT).digest("hex");
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
  const u = req.body;
  user = new User({id:u.id, pw:u.pw, name:u.name, date: new Date(u.year, u.month, u.day), phonenumber:u.phonenumber })
  user.pw = crypto.createHash("sha512").update(user.pw + process.env.SALT).digest("hex");
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

module.exports = router;
