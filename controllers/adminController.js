
//REQUIREMENTS
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Admin = require('../models/admin.model.js');
var methodOverride = require('method-override');
var authHelper = require('../helpers/auth.js');


//CREATE NEW admin POST ROUTE
router.post('/', authHelper.createSecure, function createAction(req, res){
  var admin = new Admin({
    password_digest: res.hashedPassword,
    username: req.body.username
  });
  admin.save(function(error){
  		res.json({admin:admin});
  });
});



//EXPORTS
module.exports = router;