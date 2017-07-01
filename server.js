const express = require('express');
const app     = express();


//MONGO STUFF
var mongoose = require('mongoose');
var db = mongoose.connection;
// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb://localhost/wdi-app');
db.on('error', function(err){
 console.log(err);
});
db.once('open', function() {
 console.log("database has been connected!");
});


app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000, function(){
    console.log("app listening on port 3000");
});

module.exports = app;

//testing ssh