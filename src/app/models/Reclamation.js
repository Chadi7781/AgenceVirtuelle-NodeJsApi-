var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//Define Schema
var Schema = mongoose.Schema;
const ReclamationSchema = new Schema({
  titre: {
    type: String,
    trim: true,
    required: false
  },
  description_rec: {
    type: String,
    trim: true,
    required: true
  },
  date_rec: {
    type: Date,
    default: Date.now
  },
  client: { type: mongoose.Schema.ObjectId, ref: "Clients" },
  etat: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model("Reclamations", ReclamationSchema);
