const mongoose = require("mongoose");

const Review = mongoose.model('Review' , new mongoose.Schema({
    porpertyId : {
        type: mongoose.Schema.Types.ObjectId ,
        ref : 'Property'
    },
    userAvatar : String ,
    userName : String ,
    message : String ,
    rating : Number
},
{timestamps : true}
))

module.exports = Review;