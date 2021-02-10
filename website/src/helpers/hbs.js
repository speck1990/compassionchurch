const hbs = require("hbs");

hbs.registerHelper("switch", function (value, options) {
	this.switch_value = value;
	return options.fn(this);
});

hbs.registerHelper("case", function (value, options) {
	if (value == this.switch_value) {
		return options.fn(this);
	}
});
