
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wdi-app');


var Student = require('../models/student.model.js');
// var Post = require('../models/post')
mongoose.Promise = global.Promise;


Student.remove({}, function(err){
  console.log(err);
});

var dan = new Student({
  first_name: 'Dan',
  last_name: 'Milo',
  cohort: 'WDI-9',
  
});

var ryan = new Student({
  first_name: 'Ryan',
  last_name: 'Wilkinson',
  cohort: 'WDI-9',
  
});

var randy = new Student({
  first_name: 'Randy',
  last_name: 'Galeano',
  cohort: 'WDI-9',
  
});

var hassan = new Student({
  first_name: 'Hassan',
  last_name: 'Masroor',
  cohort: 'WDI-9',
  
});


// save the Students
dan.save(function(err) {
  if (err) console.log(err);

  console.log('Student created!');
});

ryan.save(function(err) {
  if (err) console.log(err);

  console.log('Student created!');
});

randy.save(function(err) {
  if (err) console.log(err);

  console.log('Student created!');
});

hassan.save(function(err) {
  if (err) console.log(err);

  console.log('Student created!');
});