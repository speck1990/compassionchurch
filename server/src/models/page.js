const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
	location: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Location"
	},
	slug: {
		type: String
	},
	title: {
		type: String,
		trim: true
	},
	hero: {
		type: String
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
