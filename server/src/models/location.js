const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true
	},
	subdomain: {
		type: String,
		trim: true,
		lowercase: true
	},
	domain: {
		type: String,
		trim: true,
		lowercase: true
	},
	address: {
		type: String,
		trim: true
	},
	city: {
		type: String,
		trim: true
	},
	state: {
		type: String,
		trim: true
	},
	zip: {
		type: String,
		trim: true
	}
});

module.exports = mongoose.model("Location", LocationSchema);
