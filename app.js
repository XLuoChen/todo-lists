var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use('/',require('./routes/router'));

app.use(express.static('./views'));
app.use(express.static(path.join(__dirname, 'views')));

app.set('views', __dirname + '/views');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.listen(3000,function () {
  console.log('start on port 3000');
});

module.exports = app;
