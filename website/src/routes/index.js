var express = require("express");
var router = express.Router();
const getLocation = require("../helpers/getLocation");

/* GET home page. */
router.get("/:slug?", async (req, res, next) => {
	const slug = req.params.slug;

	const { pages, links, settings, location } = await getLocation(req.headers.host);

	const page = !slug ? pages.find(page => page.slug === "/") : pages.find(page => page.slug === slug);
	const template = !slug ? "home-page" : "general-page";

	res.render(`templates/charry/${template}`, { page, links, site: settings, location, layout: "templates/charry/layouts/main" });
});

module.exports = router;
