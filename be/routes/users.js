var express = require('express');
var router = express.Router();

router.post('/sign/check', function(req, res, next) {
  console.log(req.body)
});

module.exports = router;
