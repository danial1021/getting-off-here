var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken')
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var busRouter = require('./routes/bus');
var busStopRouter = require('./routes/busStop');
var tokenRouter = require('./routes/token')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('jwt-secret', process.env.JWT_SECRET)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
// 3. 연결된 testDB 사용
var db = mongoose.connection;
// 4. 연결 실패
db.on('error', function(){
    console.log('Connection Failed!');
});
// 5. 연결 성공
db.once('open', function() {
    console.log('Connected!');
});

app.use('/', indexRouter);
app.use('/api/users', usersRouter); //유저 관련 api
app.use('/api/bus', busRouter); //버스 관련 api
app.use('/api/busstop', busStopRouter); //정류장 관련 api
app.use('/api/token', tokenRouter);

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
