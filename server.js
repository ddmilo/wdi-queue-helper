const express = require('express');
const bodyParser = require('body-parser');
const app     = express();


//MONGO STUFF
var mongoose = require('mongoose');
var db = mongoose.connection;
// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb://localhost/wdi-app');
db.on('error', function(err){
 console.log(err);
});
db.once('open', function() {
 console.log("database has been connected!");
});

//USE PACKAGES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


//REQ CONTROLLERS
var studentController = require('./controllers/studentController.js');

//USE CONTROLLERS
app.use('/api/students', studentController);


//PORT STUFF
app.listen(3000, function(){
    console.log("app listening on port 3000");
});

module.exports = app;

