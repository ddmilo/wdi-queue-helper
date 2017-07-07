var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//USER
var StudentSchema = {
	first_name: { type: String, required: true, unique: true},
    last_name: { type: String, required: true, uniqe: true},
    cohort: { type: String, required: false}
};





//MAKE MODELS
var StudentModel = mongoose.model('Student', StudentSchema);

//EXPORT MODELS
module.exports = {
	Student: StudentModel

};