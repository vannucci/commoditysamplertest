var express = require('express');
var router = express.Router();

var Order = require("../models/order.js");

router.get('/orders', function(req,res) {
	res.render('index', function(err,html){
		if(err) console.log("Failed to render error: " + err);
		res.send(html);
	})
})

router.post('/api/orders', function(req, res) {
	console.log("Order Data: ");
	console.log(req.body);

	Order.create({
		orderName: req.body.name,
		orderBody: req.body.order,
		created: Date.now(),
		due: req.body.dueDate,
		complete: 0
	}).then(function(results) {
		res.redirect('/');
		res.end();
	});
});

router.route('*')
.all(function(req, res, next) {
	res.send("Error 404");
});

module.exports = router;