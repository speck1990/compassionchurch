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
	address: String,
	city: String,
	state: String,
	zip: String,
	email: String,
	phone: String,
	giving: Boolean,
	givingLink: String,
	livestream: Boolean,
	livestreamLink: String
});

module.exports = mongoose.model("Setting", SettingSchema);
