// ************** //
// Express Server //
// ************** //

var express = require("express");
var cors = require("cors");
var path = require("path");

var app = express();

const ANGULAR_BUNDLE = "dist";

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

//make angular dist folder available for public
app.use(express.static(path.join(__dirname, ANGULAR_BUNDLE)));

// all the other request should be redirected to angular app
app.use("*", express.static(path.join(__dirname, ANGULAR_BUNDLE)));

module.exports = app;