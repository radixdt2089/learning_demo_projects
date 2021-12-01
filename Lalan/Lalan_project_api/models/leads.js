const mongoose = require("mongoose");

const Leads = mongoose.model('Leads' , new mongoose.Schema({
    name : String , 
    email : String ,
    phoneNumber : String ,
    message : String
}))

module.exports = Leads;