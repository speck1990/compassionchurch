const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
	location: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Location"
	},
	slug: {
		type: String
	},
	home: Boolean,
	title: {
		type: String,
		trim: true
	},
	hero: {
		type: String
	},
	heroTagline: {
		type: String
	},
	heroButtonLabel: {
		type: String
	},
	heroButtonLink: {
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
