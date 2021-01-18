const { check, oneOf, validationResult } = require("express-validator");
const Page = require("../models/page");
const Link = require("../models/link");

/*

VALIDATION FOR LOGIN FORM

*/

const loginValidationRules = () => {
	return [oneOf([check("email").notEmpty(), check("password").notEmpty()], "All fields are required."), check("email", "Please include a valid email").isEmail()];
};

/*

VALIDATION FOR PAGE FORM

*/

const validPage = () => {
	return check("slug").custom((value, { req }) => {
		// new page check if page title exists
		// edit page, check if title has changed, if so check if title exists

		if (req.params.id) {
			return Page.findById(req.params.id).then(page => {
				if (page.slug !== req.body.slug) {
					return Page.findOne({ slug: value, user: req.user.id }).then(page => {
						if (page) {
							return Promise.reject("Slug already in use.");
						}
					});
				}
			});
		}
	});
};

const pageValidationRules = () => {
	return [
		// Fields are required
		check("title", "Title is required").notEmpty(),
		check("slug", "Slug is required").notEmpty(),
		// Page should be valid
		validPage()
	];
};

/*

VALIDATION FOR LINK FORM

*/

const validLink = () => {
	return check("label").custom((value, { req }) => {
		return Link.findOne({ label: value, user: req.user.id }).then(link => {
			if (link) {
				return Promise.reject("Link already in use.");
			}
		});
	});
};

const linkValidationRules = req => {
	return [
		// All fields are required
		check("label", "Label is required").notEmpty(),
		check("type", "Type is required").notEmpty(),
		check("linkValue", "Link is required").notEmpty(),
		// Link should be valid
		validLink()
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}

	return res.status(422).json({ errors: errors.array() }); //1: Page has errors (page validation from middleware)
};

module.exports = {
	loginValidationRules,
	pageValidationRules,
	linkValidationRules,
	validationResult,
	validate
};
