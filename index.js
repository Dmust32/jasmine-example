var express = require('express')
var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var bodyParser = require('body-parser')
var c = require('./controller')


var app = express()
app.use(bodyParser.json())

jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});

//routes
app.post('/api/runTest', c.runTest);
testt

app.listen(3000, () => {
  console.log('listeing on 3000')
})
