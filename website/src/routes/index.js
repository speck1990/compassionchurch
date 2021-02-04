var express = require("express");
var router = express.Router();
const getLocation = require("../helpers/getLocation");

/* GET home page. */
router.get("/", async (req, res, next) => {
	const location = await getLocation(req.headers.host);

	res.render("index", { location });
});

module.exports = router;
