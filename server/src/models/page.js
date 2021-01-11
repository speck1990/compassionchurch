const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	},
	slug: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true,
		trim: true
	},
	subtitle: {
		type: String,
		trim: true
	},
	content: Array
});

module.exports = mongoose.model("Page", PageSchema);
