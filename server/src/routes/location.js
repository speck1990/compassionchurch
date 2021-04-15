const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Location = require("../models/location");
const Page = require("../models/page");
const Link = require("../models/link");
const Setting = require("../models/setting");

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
		const pages = await Page.find({ location: location._id });
		const links = await Link.find({ location: location._id });
		const settings = await Setting.findOne({ location: location._id });

		const site = { location, pages, links, settings };

		res.json(site);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route       POST api/location
// @desc        Create a location
// @access      Private
router.post("/", async (req, res) => {
	try {
		const location = new Location({ ...req.body });
		// {name: "Compassion Church OKC", subdomain: "okc", domain: "compassionokc.church", address: "123 S Road", city: "Oklahoma City", state: "Oklahoma", zip: "12345"}
		await location.save();
		res.json(location);
	} catch (err) {
		console.error(err.message);
		res.status(500).send({ msg: err.message });
	}
});

// @route       PUT api/location/:id
// @desc        Update a location
// @access      Private
router.put("/:id", auth, async (req, res) => {
	const id = req.params.id;

	try {
		let location = await Location.findById(id);

		if (!location) return res.status(404).json({ msg: "Page not found" });

		// Make sure user is admin
		// if (!req.user.admin) {
		// 	return res.status(401).json({ msg: "Not authorized" });
		// }

		location = await Location.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

		res.json(location);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: err.message });
	}
});

// @route       DELETE api/locations/:id
// @desc        Delete a location
// @access      Private
router.delete("/:id", auth, async (req, res) => {
	const id = req.params.id;

	try {
		let location = await Location.findById(id);

		if (!location) return res.status(404).json({ msg: "Location not found" });
		console.log(req.user);
		// Make sure user is admin
		// if (!req.user.admin) {
		// 	return res.status(401).json({ msg: "Not authorized" });
		// }

		await Location.findByIdAndRemove(id);

		res.json({ msg: "Location deleted" });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
