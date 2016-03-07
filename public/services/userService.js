module.exports = function() {

  var fs = require("fs");

  app.get('/users', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
         console.log( data );
         res.end( data );
     });
  });
}
