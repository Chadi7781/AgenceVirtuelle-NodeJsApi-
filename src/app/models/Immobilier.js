const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const ImmobilierSchema = new Schema({
  idProprietaire: {
    type: Schema.Types.ObjectId,
    ref: "clients"
  },
  idAgent: {
    type: Schema.Types.ObjectId,
    ref: "agents"
  },
  categorie: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  surface: {
    type: Number,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  nombreFacade: {
    type: Number
  },
  nombrePiece: {
    type: Number,
    required: true
  },
  statut: {
    type: Boolean,
    required: true,
    value: false
  },
  description: {
    type: String
  }
});
module.exports = mongoose.model("immobiliers", ImmobilierSchema);
