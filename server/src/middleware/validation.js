const { check, oneOf, validationResult } = require("express-validator");

const loginValidationRules = () => {
	return [oneOf([check("email").notEmpty(), check("password").notEmpty()], "All fields are required."), check("email", "Please include a valid email").isEmail()];
};

const pageValidationRules = () => {
	return [check("title", "Title is required").notEmpty(), check("slug", "Slug is required").notEmpty()];
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
	validationResult,
	validate
};
