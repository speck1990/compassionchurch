const express = require("express");
const router = express.Router();

const Location = require("../models/location");

// @route       GET api/locations/all
// @desc        Get all locations
// @access      Public
router.get("/all", async (req, res) => {
	try {
		const locations = await Location.find();
		res.json(locations);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route       GET api/locations/:location
// @desc        Get location by subdomain or domain
// @access      Public
router.get("/:location", async (req, res) => {
	const loc = req.params.location;
	try {
		const location = await Location.findOne({ $or: [{ subdomain: loc }, { domain: loc }] });
		res.json(location);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route       POST api/location
// @desc        Create a location
// @access      Private
router.get("/", async (req, res) => {
	try {
		const location = new Location({ name: "Compassion Church OKC", subdomain: "okc", domain: "compassionokc.church", address: "123 S Road", city: "Oklahoma City", state: "Oklahoma", zip: "12345" });
		await location.save();
		res.json(location);
	} catch (err) {
		console.error(err.message);
		res.status(500).send({ msg: err.message });
	}
});

module.exports = router;
