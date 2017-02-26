var express = require('express');
var app = express();
var path = require('path');
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

app.set('view engine', 'jade');	
app.use(express.static(path.join(__dirname,"views")));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'routes')));

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

let port = Number(process.env.PORT || 5000 );
app.listen(port,()=>{
	console.log("port" + port);
});

module.exports = app;


