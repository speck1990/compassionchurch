var express = require("express");
var router = express.Router();
const getLocation = require("../helpers/getLocation");

/* GET home page. */
router.get("/:slug?", async (req, res, next) => {
	const slug = req.params.slug;

	const { pages, links } = await getLocation(req.headers.host);
	const page = pages.find(page => page.slug === slug);

	res.render("index", { page, links });
});

module.exports = router;
