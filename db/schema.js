var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//USER
var UserSchema = {
	first_name: { type: String, required: true, unique: true},
    last_name: { type: String, required: true, uniqe: true},
    cohort: { type: String, required: true, unique: true},
    is_instructor: { type: Boolean}
};





//MAKE MODELS
var UserModel = mongoose.model('User', UserSchema);

//EXPORT MODELS
module.exports = {
	User: UserModel,

};