var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/reset-password', function(req, res, next) {
  res.render('reset-password');
});


module.exports = router;

 