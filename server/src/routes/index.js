var express = require("express");
var router = express.Router();

/* GET home route. */
router.get("/", function (req, res, next) {
	res.json({ message: "Welcome!" });
});

module.exports = router;
