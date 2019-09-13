/*eslint-env node*/

//------------------------------------------------------------------------------
// emtBuild app is based on node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
const exphbs = require('express-handlebars');
var cfenv = require('cfenv');   // cfenv provides access to your Cloud Foundry environment
var app = express();    // create a new express server


//View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);    // print a message when the server starts listening
});
