const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
	location: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Location"
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
