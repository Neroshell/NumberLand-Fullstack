const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require("express-session");
const passportLocalMongoose = require('passport-local-mongoose');
const flash = require('express-flash');


const User = require('./models/user-model');
const indexRouter = require('./routes/index-router');
const usersRouter = require('./routes/users-router');
const signUpRouter = require('./routes/signup-router');
const loginRouter = require('./routes/login-router');
const logoutRouter = require('./routes/logout-router');
const resetRouter = require('./routes/reset-router');
const playRouter = require('./routes/play-router');



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



mongoose.connect('mongodb://127.0.0.1:27017/signups', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function () {
    console.log('Database connection has been established');
});

mongoose.connection.on('error', function (err) {
    console.error(' Err! Database could not connect:', err);
});




app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sign-up', signUpRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/reset-password', resetRouter);
app.use('/playground', playRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
