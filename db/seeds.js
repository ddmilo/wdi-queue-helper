
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wdi-app');

const Admin = require('../models/admin.model.js');
const Student = require('../models/student.model.js');
// const Post = require('../models/post')
mongoose.Promise = global.Promise;


Student.remove({}, function(err){
  console.log(err);
});

// Admin.remove({}, function(err){
//   console.log(err);
// });




const dan = new Student({
  first_name: 'Dan',
  last_name: 'Milo',
  cohort: 'WDI-9',

});

const ryan = new Student({
  first_name: 'Ryan',
  last_name: 'Wilkinson',
  cohort: 'WDI-9',

});

const randy = new Student({
  first_name: 'Randy',
  last_name: 'Galeano',
  cohort: 'WDI-9',

});

const hassan = new Student({
  first_name: 'Hassan',
  last_name: 'Masroor',
  cohort: 'WDI-9',

});

const instructor = new Admin({
  username: 'testAdmin',
  password_digest: 'test123'
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

instructor.save(function(err){
  if(err) console.log(err);

  console.log('Admin Created');
});
