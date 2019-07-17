var mongoose = require("mongoose");
const BienImmobilierSchema = require("./BienImmobilier");
const Schema = mongoose.Schema;
const BureauSchema = BienImmobilierSchema.discriminator(
  "Bureau",
  new Schema({})
);
module.exports=BureauSchema;
