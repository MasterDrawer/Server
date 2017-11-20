var mongoose = require('mongoose');

var connectionString = "mongodb://localhost";

mongoose.connect(connectionString);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("DB connection alive");
});