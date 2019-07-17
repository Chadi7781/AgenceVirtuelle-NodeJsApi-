const LocalCommerciale = require("../models/LocalCommerciale");
const express = require("express");
const router = express.Router();

router.post("/add", function(req, res) {

    var newLocalCommerciale = new LocalCommerciale({
        idProprietaire: req.body.idProprietaire,
        idAgent: req.body.idAgent,
        region: req.body.region,
        surface: req.body.surface,
        prix: req.body.prix,
        statut: req.body.statut,
        description: req.body.description,
        ALaUne: req.body.ALaUne,
        ValableAPartirDe: req.body.ValableAPartirDe,
        nombreEtage: req.body.nombreEtage

    });

    newLocalCommerciale.save(function(err) {
        if (err) {
            res.send({ State: "Not Ok", msg: "error" + err });
        } else {
            res.send({ State: "Okay", msg: "LocalCommerciale added" + newLocalCommerciale });
        }
    });
});

router.get("/all", function(req, res) {
    LocalCommerciale.find({})
        .populate("Client").populate("Agent","nom")
        .exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
});
router.delete("/remove/:id", function(req, res) {
    LocalCommerciale.deleteOne({ _id: req.params.id }, function(err) {
        if (err) {
            res.send({ state: "not ok", msg: "err" + err });
        } else {
            res.send({ state: "ok", msg: "supp" });
        }
    });
});
//prolongation
router.put("/update/:id", function(req, res) {
    LocalCommerciale.updateOne(
        {
            id: req.params.id,
            idProprietaire: req.body.idProprietaire,
            idAgent: req.body.idAgent,
            region: req.body.region,
            surface: req.body.surface,
            prix: req.body.prix,
            statut: req.body.statut,
            description: req.body.description,
            ALaUne: req.body.ALaUne,
            ValableAPartirDe: req.body.ValableAPartirDe,
            nombreEtage: req.body.nombreEtage
        },
        function(err,res) {
            if (err) res.send({ sate: "not ok", msg: "error:" + err });
            else
                res.send(res);
        }
    );
});
module.exports = router;
