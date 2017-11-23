var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var sql = require('mssql');
var configDetails = require('./config');
var dbConnectionStatus = false;
// console.log(configDetails);

var app = express();

//db connection
sql.connect(configDetails.dbConfig, function(err) { 
     if(err) {
        console.log('connection error', err);
   } else {
        console.log('connection successful'); 
        dbConnectionStatus = true;     
    }
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


var port = process.env.PORT || configDetails.portNumber.port;    // set our port
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var routes = require('./routes/index');
var sparkfly = require('./routes/sparkfly');
var users = require('./routes/users');
var prism = require('./routes/prism');
var fortinet = require('./routes/fortinet');

app.use('/', routes);
app.use('/sparkfly', sparkfly);
app.use('/users', users);
app.use('/prism', prism);
app.use('/fortinet', fortinet);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);