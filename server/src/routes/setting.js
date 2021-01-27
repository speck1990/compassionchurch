const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { settingValidationRules, validate } = require("../middleware/validation");

const Setting = require("../models/setting");

// @route       GET api/settings
// @desc        Get all settings for user
// @access      Private
router.get("/", auth, async (req, res) => {
	try {
		let settings = await Setting.findOne({ user: req.user.id });

		if (!settings) {
			settings = new Setting({ user: req.user.id });
			await settings.save();
		}

		res.json(settings);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ msg: "Server Error" });
	}
});

// @route       PUT api/setting/:id
// @desc        Update settings
// @access      Private
router.put("/", auth, settingValidationRules(), validate, async (req, res) => {
	try {
		let settings = await Setting.findOne({ user: req.user.id });

		if (!settings) {
			settings = new Setting({ user: req.user.id });
			await settings.save();
		}

		settings = await Setting.findByIdAndUpdate(settings._id, { $set: req.body }, { new: true });

		res.json(settings);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: err.message });
	}
});

module.exports = router;
