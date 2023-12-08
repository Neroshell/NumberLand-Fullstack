const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const userschema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});


userschema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = mongoose.model('User', userschema);

module.exports = User;
