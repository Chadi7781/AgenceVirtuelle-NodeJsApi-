const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const baseOptions = {
  discriminatorKey: "itemtype", // our discriminator key, could be anything
  collection: "Cateogries" // the name of our collection
};
// create Schema

const BienImmobilierSchema = mongoose.model(
  "BienImmobilier",
  new Schema({
    idProprietaire: {
      type: Schema.Types.ObjectId,
      ref: "Client"
    },
    idAgent: {
      type: Schema.Types.ObjectId,
      ref: "Agent"
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

    statut: {
      type: Boolean,
      required: true,
      value: false
    },
    description: {
      type: String
    },
    ALaUne: {
      type: Boolean,
      default: false
    },
    ValableAPartirDe: {
      type: Date
    }
  })
);
module.exports = mongoose.model("BienImmobilier");
