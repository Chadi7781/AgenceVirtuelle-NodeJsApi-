const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create Schema
const MessageSchema = new Schema({
  idEmmeteur: {
    type: Schema.Types.ObjectId,
    required: true
  },
  idRecepteur: {
    type: Schema.Types.ObjectId,
    required: true
  },
  contenu: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("messages", MessageSchema);
