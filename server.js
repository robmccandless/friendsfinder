var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParer.json({ type: "application.api+json" }));

app.use(express.static("app/public"));

require("./api/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(port, () => console.log("Listening on port %s", port));