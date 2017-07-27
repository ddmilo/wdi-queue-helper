//REQUIREMENTS
var express = require('express');
var router = express.Router();
var Admin = require('../models/admin.model.js');
var authHelpers = require('../helpers/auth.js');

//FOR LOGIN USER
router.get('/login', function(req, res) {
  res.json('api/sessions/login.');
});

//GETS CURRENT SESSION USER
router.get("/current", function(req, res) {
	res.json(req.session.currentUser);
});

//LOGS A USER IN AND REDIRECTS TO BEER INDEX
router.post('/login', authHelpers.loginUser, function(req, res){
  res.redirect('/#!/beer');
});

//LOGOUT USER
router.get('/logout', function(req, res){
  req.session.currentUser = null;
    res.json({done: "done"});
});

//UPDATE SESSION USER
router.post("/updateLogin", authHelpers.update, function(req, res) {
  res.json("success");
});

//EXPORTS
module.exports = router;