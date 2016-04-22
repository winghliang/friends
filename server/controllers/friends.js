// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

// Edit the show method as follows
// module.exports = (function() {
//  return {
//   index: function(req, res) {
//      Friend.find({}, function(err, results) {
//        if(err) {
//          console.log(err);
//        } else {
//          res.json(results);
//        }
//    })
//   },

//   create: function(req, res) {
// 	var friend = new Friend({name: req.body.name, age: req.body.age});
// 	friend.save(function(err, output){
// 		if (err){
// 			console.log('error saving friend');
// 		} else {
// 			console.log('successfully added friend to database', friend);
// 			res.json(output);
// 		}
// 	})  	
//   },

//   delete: function(req, res) {
//   	Friend.remove({ _id: req.params.id }, function(err){
//   		if (err){
//   			console.log('error deleting user')
//   		}
//   	})
//   }

//  }
// })();

module.exports = {
  index: function(req, res) {
     Friend.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },

  create: function(req, res) {
  var friend = new Friend({name: req.body.name, age: req.body.age});
  friend.save(function(err, output){
    if (err){
      console.log('error saving friend');
    } else {
      console.log('successfully added friend to database', friend);
      res.json(output);
    }
  })    
  },

  delete: function(req, res) {
    Friend.remove({ _id: req.params.id }, function(err){
      if (err){
        console.log('error deleting user')
      }
    })
  }

}