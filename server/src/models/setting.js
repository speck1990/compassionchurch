const mongoose = require("mongoose");

const SettingSchema = new mongoose.Schema({
	location: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Location"
	},
	facebook: String,
	instagram: String,
	twitter: String,
	youtube: String,
	footerNote: String,
	giving: Boolean,
	givingLink: String,
	livestream: Boolean,
	livestreamLink: String
});

module.exports = mongoose.model("Setting", SettingSchema);
