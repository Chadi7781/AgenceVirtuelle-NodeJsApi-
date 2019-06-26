const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const ContratSchema = new Schema({
  idImmobilier: {
    type: Schema.Types.ObjectId,
    ref: "immobiliers"
  },
  idClient: {
    type: Schema.Types.ObjectId,
    ref: "clients"
  },
  Date: {
    type: Date,
    required: true
  },
  statut: {
    type: String,
    enum: ["vente", "achat"]
  }
});
module.exports = mongoose.model("contrats", ContratSchema);
