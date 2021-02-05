const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { pageValidationRules, validate } = require("../middleware/validation");

const User = require("../models/user");
const Page = require("../models/page");

// @route       GET api/pages
// @desc        Get all pages for location
// @access      Private
router.get("/", auth, async (req, res) => {
	try {
		const pages = await Page.find({ location: req.user.location });
		res.json(pages);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ msg: "Server Error" });
	}
});

// @route       GET api/pages/:id
// @desc        Get page by id
// @access      Private
router.get("/:id", auth, async (req, res) => {
	const id = req.params.id;

	try {
		let page = await Page.findById(id);

		if (!page) return res.status(404).json({ msg: "Page not found" });

		// Make sure location owns page
		if (page.location.toString() !== req.user.location) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		res.json(page);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ msg: "Server Error" });
	}
});

// @route       POST api/pages
// @desc        Create a page
// @access      Private
router.post("/", auth, pageValidationRules(), validate, async (req, res) => {
	try {
		const page = new Page({ ...req.body, location: req.user.location });
		await page.save();
		res.json(page);
	} catch (err) {
		console.error(err.message);
		res.status(500).send({ msg: err.message });
	}
});

// @route       PUT api/pages/:id
// @desc        Update a page
// @access      Private
router.put("/:id", auth, pageValidationRules(), validate, async (req, res) => {
	const id = req.params.id;

	try {
		let page = await Page.findById(id);

		if (!page) return res.status(404).json({ msg: "Page not found" });

		// Make sure location owns page
		if (page.location.toString() !== req.user.location) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		page = await Page.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

		res.json(page);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: err.message });
	}
});

// @route       DELETE api/pages/:id
// @desc        Delete a page
// @access      Private
router.delete("/:id", auth, async (req, res) => {
	const id = req.params.id;

	try {
		let page = await Page.findById(id);

		if (!page) return res.status(404).json({ msg: "Page not found" });

		// Make sure location owns page
		if (page.location.toString() !== req.user.location) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		await Page.findByIdAndRemove(id);

		res.json({ msg: "Page deleted" });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
