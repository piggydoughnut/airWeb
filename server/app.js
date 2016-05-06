// required for converting JSX syntax
require("node-jsx").install();

require("babel-core/register")({
  "presets": ["es2015"]
});
require('babel-polyfill');
var express = require('express');
var path = require('path');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

