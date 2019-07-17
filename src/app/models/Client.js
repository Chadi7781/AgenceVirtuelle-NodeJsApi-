var mongoose = require("mongoose");
const User = require("./UserSchema");
const Schema = mongoose.Schema;
const Client = User.discriminator('Client', new Schema({
        role:{
            required:true,
            type: mongoose.Schema.ObjectId,
            ref : 'roles'
        },
        //forgot password
        resetPasswordToken:{
            type : String,
        },
        resetPasswordExpires:{
            type : Date
        }




})
);

module.exports=Client;
