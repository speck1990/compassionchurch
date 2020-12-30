const { check, oneOf, validationResult } = require("express-validator");

const loginValidationRules = () => {
	return [oneOf([check("email").notEmpty(), check("password").notEmpty()], "All fields are required."), check("email", "Please include a valid email").isEmail()];
};

const pageValidationRules = (req, res, next) => {
	oneOf([check("title", "Title is required").not().isEmpty(), check("slug", "Slug is required").not().isEmpty()]);
	next();
};

module.exports = {
	loginValidationRules,
	pageValidationRules,
	validationResult
};
