var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var failureRouter = require('./routes/failure');
var successRouter = require('./routes/success');
var loginRouter = require('./routes/login');
var buy = require('./routes/buy');
var download = require('./routes/download');
var bindDevice = require('./routes/bindDevice');
var shareList = require('./routes/shareList');
var maxConnection = require('./routes/maxConnection');
var item = require('./routes/item');
var itemList = require('./routes/itemList');
var downloadedFiles = require('./routes/downloadedFiles');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/failure', failureRouter);
app.use('/success', successRouter);
app.use('/login', loginRouter);
app.use('/buy', buy);
app.use('/download', download);
app.use('/bindDevice', bindDevice);
app.use('/shareList', shareList);
app.use('/maxConnection', maxConnection);
app.use('/item', item);
app.use('/itemList', itemList);
app.use('/downloadedFiles', downloadedFiles);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
