// require express so that we can build an express app
var express = require('express');

// require path so that we can use path stuff like path.join
var path = require('path');

// instantiate the app
var app = express();

var bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, '/client')));

require('./server/config/mongoose.js');

// this line requires and runs the code from our routes.js file and passes it app so that 
//we can attach our routing rules to our express application!
require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});
