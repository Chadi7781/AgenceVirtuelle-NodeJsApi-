var mongoose = require("mongoose");
const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;
const ChefAgenceSchema = UserSchema.discriminator(
  "ChefAgence",
  new Schema({
    privilege: {
      type: String,
      value: "chefAgence"
    },
    role:{
      type: mongoose.Schema.ObjectId,
      ref : 'role'
    }
  })
);
module.exports = mongoose.model("chefAgence", ChefAgenceSchema);
