var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');

//Student INDEX

router.get('/', function indexAction(req, res) {
  User.find(function(error, user) {
    if(error) res.json({message: 'Could not find any students'});

    res.json({user: user});
  }).select('-__v');
});

module.exports = router;