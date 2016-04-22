// First, at the top of your routes.js file you'll have to require the controller
var friends = require('./../controllers/friends.js');

module.exports = function(app) {
// verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
	app.get('/friends', function(req, res) {
    	friends.index(req, res);
    });

    app.post('/friends', function(req, res){
    	friends.create(req, res);
    });

    app.delete('/friends/:id', function(req, res){
    	friends.delete(req, res);
    });

};

