var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var twitterRouter = require('./routes/twitter');

var app = express();
/*
var dbName = 'api-twitter';
var connectionString = 'mongodb://localhost:27017/'+dbName;
*/

var dbName = 'api-twitter';
var dbuser = 'root';
var dbpassword = 'qwer1234';
var connectionString = 'mongodb://'+ dbuser +':'+ dbpassword +'@ds029640.mlab.com:29640/'+dbName;


mongoose.connect(connectionString);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Content-Type", "application/json");
     next();
 });

app.use('/', indexRouter);
app.use('/twitter', twitterRouter);

module.exports = app;
