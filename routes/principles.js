var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.json({ principles: [{ name: "bookie", test: 3 }] });
});

module.exports = router;
