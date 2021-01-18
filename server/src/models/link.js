const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	},
	label: {
		type: String
	},
	type: {
		type: String,
		trim: true
	},
	linkValue: {
		type: String,
		trim: true
	},
	newTab: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model("Link", LinkSchema);
