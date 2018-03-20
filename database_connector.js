// var restful = require('node-restful'),
// 	mongoose = restful.mongoose;
//
// var connectionString = "mongodb://drawnuts:1q2w3e$R@ds115546.mlab.com:15546/draw_nuts";
// mongoose.connect(connectionString);
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
//
// db.once('open', function () {
// 	console.log("DB connection alive");
// });
//
// module.exports = function(app)
// {
//
// 	var Game = app.resource = restful.model('game', mongoose.Schema({
// 		title: String,
// 		state: String,
// 	})).methods(['get', 'post', 'put', 'delete']);
//
// 	var User = app.resource = restful.model('user', mongoose.Schema({
// 		username: String,
// 		password: String,
// 	})).methods(['get', 'post', 'put', 'delete']);
//
// 	User.route('login', function(req, res) {
// 		var loginUser = User.find(
// 			{
// 				userName: req.userName,
// 				password: req.password
// 			});
// 		if(!!loginUser)
// 			res.send(false);
// 		res.send(true);
// 	});
//
// 	User.register(app, '/user');
// 	Game.register(app, '/game');
//
// 	return {
// 		game: Game,
// 		user: User
// 	}
// };
