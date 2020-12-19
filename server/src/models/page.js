const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true
	},
	text: {
		type: String
	}
});

const PageSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	},
	slug: {
		type: String,
		unique: true
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
	content: [ContentSchema]
});

module.exports = mongoose.model("Page", PageSchema);
