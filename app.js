
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

//app.get('/:view', function(request, response) {
//    var view = request.params.view;
//    response.render(view)
//});

app.get('/partials/:name', function(req, res){
    var name = req.params.name;
    res.render('partials/' + name);
});

// Config Api

//var mbac = require('./routes/mbac');
//
//app.get('/api/Practice/GetPracticesForCurrentUser', mbac.GetPracticesForCurrentUser);
//
//app.get('/api/Billing/AgingBillList', mbac.AgingBillList);
//
//// Config cron job
//var migrateJob = require('./cron_jobs/migrate_job');
//migrateJob.StartMigrateJob();

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("wbserg running on " + port);
});
