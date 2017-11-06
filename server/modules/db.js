//mongoose
var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/messages';

mongoose.connection.on('connected', function() {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function() {
    console.log('mongoose connection failed');
});
mongoose.connect(databaseUrl);