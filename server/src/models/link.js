const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	},
	label: {
		type: String,
		required: true,
		unique: true
	},
	type: {
		type: String,
		required: true,
		trim: true
	},
	linkValue: {
		type: String,
		required: true,
		trim: true
	},
	newTab: {
		type: Boolean,
		required: true,
		default: false
	}
});

module.exports = mongoose.model("Link", LinkSchema);
