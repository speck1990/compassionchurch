const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { linkValidationRules, validate } = require("../middleware/validation");

const Link = require("../models/link");

// @route       GET api/link
// @desc        Get all links for location
// @access      Private
router.get("/", auth, async (req, res) => {
	try {
		const links = await Link.find({ location: req.user.location });
		res.json(links);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ msg: "Server Error" });
	}
});

// @route       GET api/link/:id
// @desc        Get link by id
// @access      Private
router.get("/:id", auth, async (req, res) => {
	const id = req.params.id;

	try {
		let link = await Link.findById(id);

		if (!link) return res.status(404).json({ msg: "Link not found" });

		// Make sure user owns link
		if (link.location.toString() !== req.user.location) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		res.json(link);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ msg: "Server Error" });
	}
});

// @route       POST api/link
// @desc        Create a link
// @access      Private
router.post("/", auth, linkValidationRules(), validate, async (req, res) => {
	const { label, type, linkValue, newTab } = req.body;

	try {
		const link = new Link({ label, type, linkValue, newTab, location: req.user.location });
		await link.save();
		res.json(link);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ msg: "Server error" });
	}
});

// @route       PUT api/link/:id
// @desc        Update a link
// @access      Private
router.put("/:id", auth, linkValidationRules(), validate, async (req, res) => {
	const id = req.params.id;

	try {
		let link = await Link.findById(id);

		if (!link) return res.status(404).json({ msg: "Link not found" });

		// Make sure user owns link
		if (link.location.toString() !== req.user.location) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		link = await Link.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

		res.json(link);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ msg: "Server Error" });
	}
});

// @route       DELETE api/link/:id
// @desc        Delete a link
// @access      Private
router.delete("/:id", auth, async (req, res) => {
	const id = req.params.id;

	try {
		let link = await Link.findById(id);

		if (!link) return res.status(404).json({ msg: "Link not found" });

		// Make sure user owns link
		if (link.location.toString() !== req.user.location) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		await Link.findByIdAndRemove(id);

		res.json({ msg: "Link deleted" });
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ msg: "Server Error" });
	}
});

module.exports = router;
