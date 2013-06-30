
// Configuration Mongoose

//var db = require('./config/db');
//db.initialize();

// Configuration Express
var express = require("express");
var app = module.exports = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(express.logger());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);

});

// Config routes

app.get('/', function(request, response) {
    response.render('layout.html')
});

app.get('/partials/:name', function(req, res){
    var name = req.params.name;
    res.render('partials/' + name);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Snippets running on " + port);
});
