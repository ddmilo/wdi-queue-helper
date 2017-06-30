
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wdi-app');


var User = require('../models/user.model.js');
// var Post = require('../models/post')
mongoose.Promise = global.Promise;


User.remove({}, function(err){
  console.log(err);
});

var dan = new User({
  first_name: 'Dan',
  last_name: 'Milo',
  cohort: 'WDI-11-TA',
  is_instructor: true


});


// save the users
dan.save(function(err) {
  if (err) console.log(err);

  console.log('User created!');
});