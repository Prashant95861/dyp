const mongoose = require("mongoose");
const validator = require("validator");

const dynamicw = new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email id")
            }
        }
    },
    phone:{
        type:Number,  
        min:10
    },
    message:{
        type:String,
    }
})

const User = new mongoose.model("User",dynamicw);

module.exports = User;


