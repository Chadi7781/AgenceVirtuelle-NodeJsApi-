var mongoose = require("mongoose");
const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;
const ClientSchema = UserSchema.discriminator(
  "Client",
  new Schema({
    privilege: {
      type: String,
      value: "client"
    },
    role:{
      type: mongoose.Schema.ObjectId,
      ref : 'role'
    }
  })
);
module.exports = mongoose.model("Client", ClientSchema.scheme);
