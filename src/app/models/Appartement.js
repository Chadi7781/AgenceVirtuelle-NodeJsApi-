var mongoose = require("mongoose");
const BienImmobilierSchema = require("./BienImmobilier");
const Schema = mongoose.Schema;
const AppartementSchema = BienImmobilierSchema.discriminator(
  "Appartement",
  new Schema({
    nombreEtage: {
      type: Number,
      required: true
    }
  })
);
module.exports=mongoose.model("Appartement",AppartementSchema.scheme)
