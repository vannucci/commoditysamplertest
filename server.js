'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
var exphbs = require("express-handlebars");

const port = process.env.PORT || 8080;

var app = express();

//Serve up static content, like the CSS files from public directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set handlebars, set handle
//var exphbs = require('express-handlebars');

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

//Import routes
var routes = require("./controllers/comsampcontroller");

app.use("/", routes);

app.listen(port, function() {
	console.log("Application is running and listening on http://localhost: " + port);
});