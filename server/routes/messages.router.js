var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = new Schema({
    name: String,
    message: String
});

var Message = mongoose.model('Message', MessageSchema, 'messages');

router.post('/', function(req, res) {
    var messageToAdd = new Message(req.body);
    console.log('message posted: ', messageToAdd);
    messageToAdd.save(function(err, data) {
        if (err) {
            console.log('error', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    })
})

module.exports = router;
