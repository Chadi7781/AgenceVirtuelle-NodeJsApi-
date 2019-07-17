const mongoose = require("mongoose");
const schema = mongoose.schema;
const VisiteSchema = new Schema({
  idClient: {
    type: Schema.Types.ObjectId,
    ref: "clients",
    required: true
  },
  idImmobilier: {
    type: Schema.Types.ObjectId,
    ref: "immobiliers",
    required: true
  },
  idAgent: {
    type: Schema.Types.ObjectId,
    ref: "agents",
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
  etat: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model("visites", VisiteSchema);
