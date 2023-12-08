var express = require('express');
var router = express.Router();
const User = require('../models/user-model');
const passport = require('passport');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-up');
});

router.post('/', function(req, res, next) {

      const user = new User({
        
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email: req.body.email,
       

      });

      User.register(user, req.body.password, function (err, registered) {
        if (registered) {
            passport.authenticate('local')(req, res, function (err) {
                if (err) {
                    console.error(err);
                    return res.redirect("/"); // Redirect to signup page or handle as needed
                }

                res.redirect("/login");
            })
        } else {
            console.error(err);
            res.render("sign-up"); // Render the signup page again or handle the error appropriately
        }
    })
});


module.exports = router;

 