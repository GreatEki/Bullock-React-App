const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	firstname: { type: String, required: [true, 'Firstname is required'] },
	lastname: { type: String, required: [true, 'lastname is required'] },
	email: { type: String, required: [true, 'email is required'] },
	password: { type: String, required: [true, 'password is required'] }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
