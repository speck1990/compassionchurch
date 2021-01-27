var express = require("express");
var router = express.Router();
const getCampus = require("../helpers/getCampus");

/* GET home page. */
router.get("/", function (req, res, next) {
	const campus = getCampus(req.headers.host);

	res.render("index", { campus });
});

module.exports = router;
