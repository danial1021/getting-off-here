var express = require('express');
var path = require("path")
var router = express.Router();

router.post('/check', function(req, res, next) {
    const token = req.body.token;
    let jwt_secret = process.env.JWT_SECRET;

    if (!token) {
        res.status(400).json({
        'status': 400,
        'msg': 'Token 없음'
        });
    }
    const checkToken = new Promise((resolve, reject) => {
        jwt.verify(token, jwt_secret, function (err, decoded) {
        if (err) reject(err);
        resolve(decoded);
        });
    });

    checkToken.then(
        token => {
        console.log(token);
        res.status(200).json({
            'status': 200,
            'msg': 'success',
            token
        });
    })
});

module.exports = router;
