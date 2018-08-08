'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;
var mongoose = require('mongoose');
var Modules = require('./api/model');
var cors = require('cors');


//Connect to mongodb

mongoose.connect('mongodb://nestmetric:nestmetric123@ds113692.mlab.com:13692/nestmetric', { useMongoClient: true}, (err) => {
    if(err){
        console.log(err);
    }
    else {
        console.log("MongoDB is now Connected")
    }
});



app.use(cors())

//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api', require('./api'));

app.get('/', (req, res) => {
    res.send("HELL WORLDDD HOW ARE YOU ALLL !!!")
  })
  
app.listen(port, function () {
    console.log('Running server on ' + port);
});

app.use(function(err, req, res, next) {
    if(err) {
        res.send("Error: "+ err);
    }
    // res.status(err.status || 500);
   
});