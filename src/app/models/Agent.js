var mongoose = require("mongoose");
const UserSchema = require("./UserSchema");
const Schema = mongoose.Schema;
const AgentSchema = UserSchema.discriminator(
  "Agent",
  new Schema({
      role:{
          required:true,
          type: mongoose.Schema.ObjectId,
          ref : 'roles'
      }



  })
);
module.exports =AgentSchema
