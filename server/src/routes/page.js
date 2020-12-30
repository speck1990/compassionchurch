const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { pageValidationRules, validationResult } = require("../middleware/validation");
const { check } = require("express-validator");

const User = require("../models/user");
const Page = require("../models/page");

// @route       GET api/pages
// @desc        Get all pages
// @access      Private
router.get("/", auth, async (req, res) => {
	try {
		const pages = await Page.find();
		res.json(pages);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
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

		// Make sure user owns contact
		if (page.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		res.json(page);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route       POST api/pages
// @desc        Create a page
// @access      Private
router.post("/", auth, pageValidationRules, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { title, slug, content } = req.body;

	try {
		const page = new Page({ title, slug, content, user: req.user.id });
		await page.save();
		res.json(page);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});

// @route       PUT api/pages/:id
// @desc        Update a page
// @access      Private
router.put("/:id", auth, [check("title", "Title is required").not().isEmpty(), check("slug", "Slug is required").not().isEmpty()], async (req, res) => {
	const id = req.params.id;

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	// const { title, slug, subtitle, content } = req.body;

	try {
		let page = await Page.findById(id);

		if (!page) return res.status(404).json({ msg: "Page not found" });

		// Make sure user owns contact
		if (page.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Not authorized" });
		}

		page = await Page.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

		res.json(page);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
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

		// Make sure user owns contact
		if (page.user.toString() !== req.user.id) {
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
