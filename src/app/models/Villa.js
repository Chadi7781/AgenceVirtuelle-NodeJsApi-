var mongoose = require("mongoose");
const BienImmobilierSchema = require("./BienImmobilier");
const Schema = mongoose.Schema;
const VillaSchema = BienImmobilierSchema.discriminator(
  "Villa",
  new Schema({
    nombreFacade: {
      type: Number,
      required: true
    },
    nombrePiece: {
      type: Number,
      required: true
    },
    nombreEtage: {
      type: Number,
      required: true
    },
    NombreSalleDeBain: {
      type: Number
    }
  })
);
module.exports = VillaSchema;
