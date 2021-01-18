const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	slug: {
		type: String
	},
	title: {
		type: String,
		trim: true
	},
	description: {
		type: String,
		trim: true
	},
	publish: Date,
	unpublish: Date,
	visible: Boolean,
	content: Array
});

module.exports = mongoose.model("Page", PageSchema);
