var express = require('express');
var app = express();
var mongo = require('mongodb');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;
var database = require('./config/database');

mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(express.static('static'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes
require('./app/routes')(app, passport);

var MongooseSeed = require('mongoose-seed-db');
//import MongooseSeed from 'mongoose-seed-db'; //ES6

MongooseSeed.connect(process.env._MONGODB_URI).then(() => {
    console.log("jaaaaaaaaaa");
    MongooseSeed.loadModels(__dirname + '/app/models');
    MongooseSeed.clearAll().then(() => {
        MongooseSeed.populate(__dirname + '/app/data').then(() => {
            console.log("baseData success");
            //process.exit();
        });
    });
}).catch((err)=> {
    console.log(err);
});

app.listen(port);
console.log("App listening on port " + port);


