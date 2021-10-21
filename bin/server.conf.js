// ******************** //
// server configuration //
// ******************** //

var express = require("express");
var cors = require("cors");

var app = express();

const ANGULAR_BUNDLE = "dist";

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

//make angular dist folder available for public
app.use(express.static("./"+ANGULAR_BUNDLE));

app.get('/*', (req, res) => res.sendFile('index.html', {root: ANGULAR_BUNDLE+"/"}));

var http = require("http");

var port = process.env.PORT || "4300";
app.set("port", port);

var server = http.createServer(app);
server.listen(port);
server.on("listening", onListening);

function onListening() {
  console.log("Listening on " + port);
}