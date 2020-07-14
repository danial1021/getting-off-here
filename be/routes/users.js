var express = require('express');
var router = express.Router();


const User = require("../model/user")

router.post('/login/check', function(req, res, next) {
  console.log(req.body)
});

router.post('/register', function(req, res, next) {
  fasdf
});

module.exports = router;
