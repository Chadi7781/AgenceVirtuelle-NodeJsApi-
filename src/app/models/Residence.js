var mongoose = require("mongoose");
const BienImmobilierSchema = require("./BienImmobilier");
const Schema = mongoose.Schema;
const VillaSchema = BienImmobilierSchema.discriminator(
  "Residence",
  new Schema({
    nombreEtage: {
      type: Number,
      required: true
    }
  })
);
module.exports = VillaSchema;
