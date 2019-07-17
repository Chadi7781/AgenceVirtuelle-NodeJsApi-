var express = require("express");
var mongoose=require("mongoose")
var client = require("./src/app/controllers/clients");
var agent = require("./src/app/controllers/agents");
var chefAgence = require("./src/app/controllers/chefAgences");
var role = require("./src/app/controllers/role");
var reclamation = require("./src/app/controllers/reclamations");
var mail = require("./src/app/controllers/mails");
var bodyParser = require("body-parser");
var User=require('./src/app/models/UserSchema')
var Role=require('./src/app/models/Role')
var roleUser=require('./src/app/models/Role')
var allUser=require('./src/app/controllers/user')
var offre = require('./src/app/controllers/offres')
var appartement = require('./src/app/controllers/appartements')
var bureau = require('./src/app/controllers/bureaus')
var maison = require('./src/app/controllers/maisons')
var localCommerciale = require('./src/app/controllers/localCommerciales')
var residence = require('./src/app/controllers/residences')
//
//var forgetPass= require('./src/app/controllers/forgotPassword');
//
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
const passport=require('passport')
app.use(passport.initialize());

app.use(bodyParser.json());
app.set("secretKey", "tokentest");
app.use("/clients", client);
app.use("/agents", agent);
app.use("/chefAgences", chefAgence);
app.use("/reclamations", reclamation);
app.use("/roles", role);
app.use("/mails", mail);
app.use("/users",allUser);
app.use('/offres',offre);
app.use('/appartements',appartement);
app.use('/bureaus',bureau);
app.use('/localCommerciales',localCommerciale);
app.use('/masions',maison);
app.use('/residences',residence);


//********

mongoose.connect('mongodb://localhost:27017/mydb',function (err) {
    if (err) {
        console.log('Not connected to databases: ' + err);
    } else {
        console.log('Successfully connected to MongoDB');

    }
});
//-----





app.listen(8080, function() {
  console.log("server connected on port 8080");
});
