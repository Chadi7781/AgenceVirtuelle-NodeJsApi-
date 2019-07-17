var mongoose = require("mongoose");
const BienImmobilierSchema = require("./BienImmobilier");
const Schema = mongoose.Schema;
const MaisonSchema = BienImmobilierSchema.discriminator(
  "Maison",
  new Schema({})
);
module.exports = MaisonSchema;
