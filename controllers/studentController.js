const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Student = require('../models/student.model.js');

//Student INDEX

router.get('/', function indexAction(req, res) {
  Student.find(function(error, students) {
    if(error) res.json({message: 'Could not find any students'});

    res.json({students: students});
  }).select('-__v');
});

// STUDENT CREATE

router.post('/', function createAction(req, res){
  let student = new Student(req.body);
  student.save(function(error){
      res.json({student: student})
    });
});


//Student Delete

router.delete("/delete/:studentId", function(req, res) {
  console.log('delete route');
  Student.findByIdAndRemove(req.params.studentId)
    .exec(function (err, student) {
      console.log(student);
      res.json({student: student});
    });
});

module.exports = router;
