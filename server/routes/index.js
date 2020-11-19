var express = require("express");
var router = express.Router();

/* GET home route. */
router.get("/", function (req, res, next) {
	res.send(200);
});

module.exports = router;
