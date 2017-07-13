
//Sequelize is the library itself
var Sequelize = require("sequelize");

//This is the written connection to our server
var connection = require("../config/connection.js");


var Order = connection.define("order", {
	orderName: {
		type: Sequelize.STRING
	},
	orderBody: {
		type: Sequelize.STRING
	},
	created: {
		type: Sequelize.DATE
	},
	due: {
		type: Sequelize.DATE
	},
	complete: {
		type: Sequelize.BOOLEAN //may cause issues
	}
}, {
	timestamps: false
});

Order.sync({force: true});

module.exports = Order;