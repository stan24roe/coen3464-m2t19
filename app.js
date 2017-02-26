var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var index = require('./routes/index');
var ContactUs = require('./routes/ContactUs');
var service1 = require('./routes/service1');
var service2 = require('./routes/service2');
var service3 = require('./routes/service3');


var app = express();

// view engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /routes
//app.use(favicon(path.join(__dirname, 'routes', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(path.join(__dirname, 'routes')));

app.use('/', index);
app.use('/ContactUs', ContactUs);
app.use('/service1', service1);
app.use('/service2', service2);
app.use('/service3', service3);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
 res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

 // render the error page
 res.status(err.status || 500);
 res.render('error');
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
module.exports = app;
