var express = require('express');
var path = require("path")
var router = express.Router();
const jwt = require("jsonwebtoken")

router.post('/check', function(req, res, next) {
    const token = String(req.body.token);
    let jwt_secret = process.env.JWT_SECRET;

    if (!token) {
        res.status(400).json({
        'status': 400,
        'msg': 'Token 없음'
        });
    }
    const checkToken = new Promise((resolve, reject) => {
        jwt.verify(token, jwt_secret, function (err, decoded) {
        if (err) reject(err)
        resolve(decoded);
        })
    });

    checkToken.then(
        token => {
        console.log(1)
        res.send({success:true})
    })
    .catch(
        err => {
        console.log(0)
        res.send({success:false})
    })
});

module.exports = router;
