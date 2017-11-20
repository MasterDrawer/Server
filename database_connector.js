var mongoose = require('mongoose');

var connectionString = "mongodb://localhost";

mongoose.connect(connectionString);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("DB connection alive");
});

var gameSchema = mongoose.Schema({
    name: {type: String, required: true},
    // player: {type: Schema.ObjectId, ref: 'player', require: true}
});

gameSchema.methods.CreateGame  = function(){
    var welcome = "New Game Created: " + this.name;
    console.log(welcome);
};

module.exports = gameSchema;