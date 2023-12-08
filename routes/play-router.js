var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('playground');
} else {
    res.redirect('/login');
}
  
});

router.get('/addition', function(req, res, next) {
  res.render('addition');
});
router.get('/subtraction', function(req, res, next) {
  res.render('subtraction');
});
router.get('/multiplication', function(req, res, next) {
  res.render('multiplication');
});
router.get('/division', function(req, res, next) {
  res.render('division');
});
router.get('/easy-abc', function(req, res, next) {
  res.render('easy-abc');
});



module.exports = router;

 