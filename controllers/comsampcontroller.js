var express = require('express');
var router = express.Router();

router.route('*')
.all(function(req, res, next) {
	res.send("Error 404");
});

module.exports = router;