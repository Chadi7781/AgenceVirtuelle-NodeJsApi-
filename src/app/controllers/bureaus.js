const express = require('express');
const Bureau = require('../models/Bureau');
const router =express.Router();

router.post('/add', function (req ,res) {
    var newBureau = new Bureau({
        idProprietaire: req.body.idProprietaire,
        idAgent: req.body.idAgent,
        region: req.body.region,
        surface: req.body.surface,
        prix: req.body.prix,
        statut: req.body.statut,
        description: req.body.description,
        ALaUne: req.body.ALaUne,
        ValableAPartirDe: req.body.ValableAPartirDe
    });

    newBureau.save(function (err ,bureau) {
        if(err){
            res.send({status:"fail" , 'msg':'can"t add bureau'+err});
        }
        else {
            res.json({status: "succes", msg: "Burau added", data: {bureau: bureau }});
        }

    });
});
    router.get('/all' ,function (req ,res) {
        Bureau.find({}).populate('Client').populate('Agent').exec(function (err ,res) {
            if(err){
                res.send({err});
            }
            else
                res.send({res});
        });

    });

    router.delete('/remove/:id' ,function (req ,res) {
        Bureau.deleteOne({_id : req.params.id},function (err) {
            if(err)
                res.send({err});
            else
                res.send('supprimé');
        });

    });

    router.put("/update/:id", function(req, res) {
        Bureau.updateOne(
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
                ValableAPartirDe: req.body.ValableAPartirDe
            },
            function(err) {
                if (err) res.send({ success: false, msg: "error:" + err });
                else res.send({ success: true, msg: "Bureau updated" +Bureau});
            }
        );
    });

    module.exports = router;




