const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//USER
const StudentSchema = {
	first_name: { type: String, required: true, unique: true},
    last_name: { type: String, required: true, uniqe: true},
};

const AdminSchema = {
    username: { type: String},
    password_digest: { type: String, required: true }

}




//MAKE MODELS
const StudentModel = mongoose.model('Student', StudentSchema);
const AdminModel = mongoose.model('Admin', AdminSchema);

//EXPORT MODELS
module.exports = {
    Student: StudentModel,
    Admin: AdminModel

};
