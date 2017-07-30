
//REQUIREMENTS
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Admin = require('../models/admin.model.js');
const methodOverride = require('method-override');
const authHelper = require('../helpers/auth.js');


//CREATE NEW admin POST ROUTE
router.post('/', authHelper.createSecure, function createAction(req, res){
  let admin = new Admin({
    password_digest: res.hashedPassword,
    username: req.body.username
  });
  admin.save(function(error){
  		res.json({admin:admin});
  });
});



//EXPORTS
module.exports = router;
