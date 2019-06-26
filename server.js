var express = require("express");
var client = require("./src/app/controllers/clients");
var agent = require("./src/app/controllers/agents");

var db = require("./src/app/models/db");
var bodyParser = require("body-parser");

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.set("secretKey", "tokentest");
app.use("/clients", client);
app.use("/agents", agent);
app.listen(8080, function() {
  console.log("server connected on port 8080");
});

//     npm i nodemon -g --save
