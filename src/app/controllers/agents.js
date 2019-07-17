const express = require("express");
const router = express.Router();
//load user module
const User = require("../models/Agent");
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../../server");
const passport = require("passport");
//load Input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

//@Route GET api/users/test
//@desc tests user route
//@acces Public
router.get("/test", (req, res) => res.json({ msg: "Users work" }));

//@Route Post api/users/register
//@desc Register user
//@acces Public

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = "Email already exists";
            return res.status(400).json(errors);
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: "200", //size
                r: "pg", //Rating
                d: "mm" //Default
            });

            console.log({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                motDePasse: req.body.motDePasse,
                tel: req.body.tel,
                adress: req.body.adress,
                role: req.body.role,
            });

            const newUser = new User({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                motDePasse: req.body.motDePasse,
                tel: req.body.tel,
                adress: req.body.adress,
                role: req.body.role,
                avatar
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.motDePasse, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.motDePasse = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});
//@Route POST api/users/login
//@desc login user returning JWT Token
//@acces Public
router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const motDePasse = req.body.motDePasse;
    //find user by email
    User.findOne({ email }).populate("role","nom").exec(function(err,user ) {

        //check for user
        if (!user) {
            errors.email = "User not Found";
            return res.status(400).json(errors);
        }

        //check motDePasse
        else if(bcrypt.compare(motDePasse, user.motDePasse)) {
            // user matched
            const payload = { id: user.id, nom: user.nom, avatar: user.avatar }; //create jwt payload
            //sign Token

            const token = jwt.sign(payload, req.app.get("secretKey"), { expiresIn: '1h' });
            res.json({status: "succes", msg: "user found", data: {user: user , token: token}});

        } else {
            errors.motDePasse = "motDePasse incorrect";
            return res.status(400).json(errors);
        }
    });
});
//@Route GET api/users/current
//@desc return current user
//@acces Private
router.get(
    "/current",
    passport.authenticate("jwt", { session: false },function (err,data) {
        if (err)
            res.json({success: false, message: err})
        //to Get protective rout
        else
            res.json({success: true, message: "current user is " + data.user})
    }));


router.get("/all", function(req, res) {
    User.find({})
        .populate("role","nom")
        .exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json({status: "succes", msg: "All Agent", data: {result: result }});
            }
        });
});


module.exports = router;
