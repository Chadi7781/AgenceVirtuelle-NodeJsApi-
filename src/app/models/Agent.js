var mongoose = require("mongoose");
const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;
const AgentSchema = UserSchema.discriminator(
  "Agent",
  new Schema({
    privilege: {
      type: String,
      value: "agent"
    },

    role:{
      type: mongoose.Schema.ObjectId,
      ref : 'role'
    }
  })
);
module.exports = mongoose.model("Agent", AgentSchema.scheme);
