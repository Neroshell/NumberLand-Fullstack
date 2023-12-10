var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/user-model');




router.get('/', function(req, res) {
    req.logout(function(err) {
      if (err) {
        return next(err);
      }
      res.redirect('/'); // Redirect to the home page 
    });
  });



module.exports = router;

 