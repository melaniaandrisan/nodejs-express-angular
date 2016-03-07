
  var express = require('express');
  var router = express.Router();
  var fs = require("fs");


  var path = require('path');
  var appDir = path.dirname(require.main.filename);


// makes a GET to ./users
  router.get('/', function (req, res) {

    var fileSource = appDir + "/" + "users.json";
    console.log( fileSource );

    fs.readFile( fileSource, 'utf8', function (err, data) {
         console.log( data );
         res.send( data );
     });


     //res.send('respond with a resource');
  });

module.exports =router;
