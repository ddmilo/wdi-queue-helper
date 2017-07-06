var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Student = require('../models/student.model.js');

//Student INDEX

router.get('/', function indexAction(req, res) {
  Student.find(function(error, student) {
    if(error) res.json({message: 'Could not find any students'});

    res.json({student: student});
  }).select('-__v');
});

module.exports = router;