const mongoose = require("mongoose");

const Users = mongoose.model('Users' , new mongoose.Schema({
    profilePicture : String,
    isAgent : Boolean ,
    isAgency : Boolean ,
    isUnderAgency : Boolean ,
    agencyId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Users'
    },
    fullName : String ,
    email : String ,
    password : String , 
    isActive : Boolean ,
    personalDetails : {
        type : new mongoose.Schema({
            firstName : String ,
            lastName : String ,
            phone : Number ,
            mobile : Number ,
            website : String ,
            fax : String ,
            aboutSummary : String 
        })
    },
    agencyDetails : {
        type : new mongoose.Schema({
            agencyName : String ,
            address : String ,
            agency : Number ,
            license : String ,
            taxNumber : String ,
            language : [String] ,
        }) ,
       
    },
    socialProfile : [{
        type : Object
    }],
    favouriteProperties : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Property'
    }],



}))

module.exports = Users;