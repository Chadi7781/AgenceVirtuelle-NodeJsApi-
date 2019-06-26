const mongoose = require("mongoose");
const UserSchema = require("./UserSchema");
const VisiteSchema = new UserSchema({
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
  }
});
module.exports = mongoose.model("visites", VisiteSchema);
