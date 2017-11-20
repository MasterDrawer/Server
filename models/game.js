var database = require('../database_connector');
var mongoose = require('mongoose');

var Game = mongoose.model('Game',database);

var game = new Game({name: 'newGame'});

game.save(function (err, game){
    if(err) return console.error(err);
    game.CreateGame();
});
