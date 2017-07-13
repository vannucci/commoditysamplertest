var Sequelize = require("sequelize");

const userdata = require("../userdata");

//Instantiate connection
var sequelize = new Sequelize("orders", "root", "helloworld", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});


//const sequelize = new Sequelize(userdata.uri);

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully');
	})
	.catch(err => {
		console.error('Unable to connect to database error: ' + err);
	})

module.exports = sequelize;