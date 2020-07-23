var express = require('express');
var path = require("path")
var router = express.Router();

/* GET home page. */
router.get('/check', function(req, res, next) {
    console.log(res.body)
});

module.exports = router;
