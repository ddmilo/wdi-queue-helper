var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Student = require('../models/student.model.js');

//Student INDEX

router.get('/', function indexAction(req, res) {
  Student.find(function(error, students) {
    if(error) res.json({message: 'Could not find any students'});

    res.json({students: students});
  }).select('-__v');
});

// router.get('/', (req, res) => {
//   Student
//     .find({})
//     .exec((err, students) => {
//       if(err) console.log(err);
//       res.json({students: students});
//     })
// });

module.exports = router;
