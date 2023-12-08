var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/user-model');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');

});


router.post('/', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            console.error(err);
            return next(err);
        }

        if (!user) {
            // Authentication failed
            req.flash('error', 'Invalid email or password');  // Flash a message for failed login
            return res.redirect('/login');
        }

        // Authentication succeeded
        req.logIn(user, function (err) {
            if (err) {
                console.error(err);
                return next(err);
            }

            return res.redirect('/playground');
        });
    })(req, res, next);
});




module.exports = router;

 