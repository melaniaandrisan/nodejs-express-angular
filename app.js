var express = require('express');
var app = express();
var path = require('path');



// Serve static content for the app from the "public" directory in the application directory.
// To be able to link the js files from html
app.use(express.static(__dirname + '/public'));

var userService = require('./public/services/userService.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// get a html file directly as it is
app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
