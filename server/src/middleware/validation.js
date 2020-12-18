const { check, oneOf, validationResult } = require("express-validator");

const loginValidationRules = () => {
	return [oneOf([check("email").notEmpty(), check("password").notEmpty()], "All fields are required."), check("email", "Please include a valid email").isEmail()];
};

module.exports = {
	loginValidationRules,
	validationResult
};
