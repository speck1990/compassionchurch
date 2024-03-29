const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	location: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Location"
	},
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		trim: true
	},
	lastName: {
		type: String,
		trim: true
	}
});

module.exports = mongoose.model("User", UserSchema);
