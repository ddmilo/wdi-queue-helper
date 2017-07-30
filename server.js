const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app     = express();
const session = require('express-session');


//MONGO STUFF
const mongoose = require('mongoose');
const db = mongoose.connection;
// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb://localhost/wdi-app');
db.on('error', function(err){
 console.log(err);
});
db.once('open', function() {
 console.log("database has been connected!");
});

//AUTH STUFF
app.use(session({
  secret: "beerbeerbeer",
  resave: false,
  saveUninitialized: false
}));

//USE PACKAGES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


//REQ CONTROLLERS
const sessionsController = require('./controllers/sessions.js');
const studentController = require('./controllers/studentController.js');
const adminController = require('./controllers/adminController.js');

//USE CONTROLLERS
app.use('/api/sessions', sessionsController);
app.use('/api/students', studentController);
app.use('/api/admin', adminController);


//PORT STUFF
app.listen(3000, function(){
    console.log("app listening on port 3000");
});

module.exports = app;
