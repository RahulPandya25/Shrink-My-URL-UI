// ******************** //
// server configuration //
// ******************** //

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


var http = require("http");

var port = process.env.PORT || "4300";
app.set("port", port);

var server = http.createServer(app);
server.listen(port);
server.on("listening", onListening);

function onListening() {
  console.log("Listening on " + port);
}