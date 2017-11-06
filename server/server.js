var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = require('./routes/messages.router.js');
var db = require('./modules/db.js');
var port = 5000;

//app.use
app.use(bodyParser.json());
app.use(express.static('server/public'));

//routers
app.use('/messages', messages);

//spin up server
app.listen(port, function() {
    console.log('listening on port ', port);
})