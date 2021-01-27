var express = require("express");
var router = express.Router();

const campuses = [
	{
		name: "Compassion Church of Oklahoma City",
		subdomain: "okc",
		domain: "compassionokc.church",
		city: "Oklahoma City",
		state: "Oklahoma"
	},
	{
		name: "Compassion Church of Wichita Falls",
		subdomain: "wichitafalls",
		domain: "compassionwf.church",
		city: "Wichita Falls",
		state: "Texas"
	}
];

function getSubdomain(h) {
	var parts = h.split(".");
	if (parts.length === 2) return "www";
	return parts[0];
}

/* GET home page. */
router.get("/", function (req, res, next) {
	const subdomain = getSubdomain(req.headers.host);

	const campus = campuses.find(campus => campus.subdomain === subdomain);

	res.render("index", { campus });
});

module.exports = router;
