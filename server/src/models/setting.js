const mongoose = require("mongoose");

const SettingSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	facebook: String,
	instagram: String,
	twitter: String,
	youtube: String
});

module.exports = mongoose.model("Setting", SettingSchema);
