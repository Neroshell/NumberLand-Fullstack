var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-up');
});

router.post('/', function(req, res, next) {
 
      res.render('login');
  });


module.exports = router;

 