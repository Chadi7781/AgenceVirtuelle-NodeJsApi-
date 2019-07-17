var mongoose = require("mongoose");
const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;
const ChefAgenceSchema = UserSchema.discriminator(
  "ChefAgence",
  new Schema({
      role:{
          required:true,
          type: mongoose.Schema.ObjectId,
          ref : 'roles'
      }


  })
);
module.exports = mongoose.model("ChefAgence");
