const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/user");
const Link = require("../models/link");

// @route       GET api/link
// @desc        Get all links
// @access      Private
router.get("/", auth, async (req, res) => {
	try {
		const links = await Link.find();
		res.json(links);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
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

		// Make sure user owns contact
		// if (link.user.toString() !== req.user.id) {
		// 	return res.status(401).json({ msg: "Not authorized" });
		// }

		res.json(link);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route       POST api/link
// @desc        Create a link
// @access      Private
router.post("/", auth, [check("label", "Label is required").not().isEmpty(), check("type", "Type is required").not().isEmpty(), check("linkValue", "Link is required").not().isEmpty()], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { label, type, linkValue, newTab } = req.body;

	try {
		const link = new Link({ label, type, linkValue, newTab });
		await link.save();
		res.json(link);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});

// @route       PUT api/link/:id
// @desc        Update a link
// @access      Private
router.put("/:id", auth, [check("label", "Label is required").not().isEmpty(), check("type", "Type is required").not().isEmpty(), check("linkValue", "Link is required").not().isEmpty()], async (req, res) => {
	const id = req.params.id;

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	// const { title, slug, subtitle, content } = req.body;

	try {
		let link = await Link.findById(id);

		if (!link) return res.status(404).json({ msg: "Link not found" });

		// Make sure user owns contact
		// if (link.user.toString() !== req.user.id) {
		// 	return res.status(401).json({ msg: "Not authorized" });
		// }

		link = await Link.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

		res.json(link);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
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

		// Make sure user owns contact
		// if (link.user.toString() !== req.user.id) {
		// 	return res.status(401).json({ msg: "Not authorized" });
		// }

		await Link.findByIdAndRemove(id);

		res.json({ msg: "Link deleted" });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;