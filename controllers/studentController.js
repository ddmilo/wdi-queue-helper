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

// STUDENT CREATE

router.post('/', function createAction(req, res){
  var student = new Student(req.body);
  student.save(function(error){
      res.json({student: student})
    });
})

module.exports = router;
