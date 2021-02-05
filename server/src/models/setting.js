const mongoose = require("mongoose");

const SettingSchema = new mongoose.Schema({
	location: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Location"
	},
	facebook: String,
	instagram: String,
	twitter: String,
	youtube: String
});

module.exports = mongoose.model("Setting", SettingSchema);
