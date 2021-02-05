const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const { loginValidationRules, validationResult } = require("../middleware/validation");
const { check } = require("express-validator");

const User = require("../models/user");
const Location = require("../models/location");

// @route       GET api/users
// @desc        Get logged in user
// @access      Private
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route       POST api/users/register
// @desc        Register a user
// @access      Public
router.post(
	"/register",
	[check("firstName", "First name is required").not().isEmpty(), check("lastName", "Last name is required").not().isEmpty(), check("email", "Please include a valid email").isEmail(), check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 })],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { firstName, lastName, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({ msg: "User already exists" });
			}

			user = new User({ firstName, lastName, email, password });

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			const location = await Location.findOne();
			user.location = location._id;

			await user.save();

			const payload = {
				user: {
					id: user._id,
					location: user.location
				}
			};

			jwt.sign(
				payload,
				process.env.JWT_SECRET,
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

// @route       POST api/users/login
// @desc        Auth user & get token
// @access      Public
router.post("/login", loginValidationRules(), async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const error = errors.array({ onlyFirstError: true });
		return res.status(401).json({ msg: error[0].msg });
	}

	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email });

		if (!user) {
			return res.status(401).json({ msg: "Sorry, we can't find an account with this email address. Please try again." });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(401).json({ msg: "Incorrect password. Please try again." });
		}

		const payload = {
			user: {
				id: user._id,
				location: user.location
			}
		};

		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{
				expiresIn: 360000
			},
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
