var restful = require('node-restful')
var gameSchema = require('../models/game');

var gameRouter = restful.model('game', gameSchema).methods(['get', 'post', 'put', 'delete']);

module.exports = gameRouter;
