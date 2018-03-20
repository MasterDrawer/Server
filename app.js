var app = require('express')();
var bodyParser = require('body-parser');
var	methodOverride = require('method-override');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var restful = require('node-restful');
var mongoose = restful.mongoose;

var connectionString = "mongodb://drawnuts:1q2w3e$R@ds115546.mlab.com:15546/draw_nuts";
mongoose.useMongoClient = true;
mongoose.connect(connectionString);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
	console.log("DB connection alive");
});
server.listen(1234);

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

// app.get('/', function (req, res) {
// 	res.sendfile(__dirname + '/index.html');
// });



var Game = app.resource = restful.model('game', mongoose.Schema({
	title: String,
	state: String
})).methods(['get', 'post', 'put', 'delete']);

var User = app.resource = restful.model('user', mongoose.Schema({
	username: String,
	password: String
})).methods(['get', 'post', 'put', 'delete']);

User.route('login', function(req, res) {
	var loginUser = User.find(
		{
			userName: req.userName,
			password: req.password
		});
	if(!!loginUser)
		res.send(false);
	res.send(true);
});

User.register(app, '/user');
Game.register(app, '/game');


io.on('connection', function (socket) {
	console.log("user connected");
	socket.on('GetGames', function(tempSocket){
		console.log("user requested games");
		Game.find({"state": "Open"}, function(err,games){
			var x = games[0].state;
			var y = games[0].title;
			socket.emit("GetGames2",games);
			console.log("server responsed games");
		});

	});
	// socket.on('updated color', function (data) {
	// 	console.log(data);
	// });
});

app.listen("8000");
module.exports = app;