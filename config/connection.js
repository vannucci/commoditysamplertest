var Sequelize = require("sequelize");

//Instantiate connection
var sequelize = new Sequelize("orders", "root", "12345", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully');
	})
	.catch(err => {
		console.error('Unable to connect to database error: ' + err);
	});

module.exports = sequelize;