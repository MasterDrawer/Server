var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var db = require('./database_connector')(app);

server.listen(1234);

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	console.log("user connected");
	socket.on('updated color', function (data) {
		console.log(data);
	});
});


db.game.insert({title: "Mako-Game", state:"Open"});
db.game.insert({title: "Mako-Kofiko", state:"Closed"});


io.on('GetGames', function(socket){
	var openGames = db.Game.find({state: "Open"});
	io.emit(openGames);
});

module.exports = app;