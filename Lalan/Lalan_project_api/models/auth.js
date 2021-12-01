const mongoose = require("mongoose");

const Auth = mongoose.model('Auth' , new mongoose.Schema({
    fullName : String , 
    email : String ,
    password : String ,
    // otp : String 
}))

module.exports = Auth;