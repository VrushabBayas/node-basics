var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
const  config = require('./utils/database').config;

const session = require('express-session')
var MySQLStore = require('express-mysql-session')(session);

var indexRouter = require('./routes/admin');
var authRoutes = require('./routes/auth');

var app = express();
var sessionStore = new MySQLStore(config);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	key: 'dash-backend',
	secret: 'dash-backend_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

//path filtering for the admin routes
app.use('/admin', indexRouter);
app.use(authRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});




// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ Error: "Something went wrong" });
});





module.exports = app;
