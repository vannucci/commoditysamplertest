var express = require('express');
var router = express.Router();

var Order = require("../models/order.js");

/*
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are aynchronous, which helps with percieved speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Chirp.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

*/

router.get("/admin", function(req,res) {
	Order.findAll({})
	.then(function(results) {
		res.json(results);
	})
})

router.get("/orders", function(req,res) {
	res.render('orders');
});


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
		res.redirect('/orders');
		res.end();
	});
});

router.route('*')
.all(function(req, res, next) {
	res.send("Error 404");
});

module.exports = router;