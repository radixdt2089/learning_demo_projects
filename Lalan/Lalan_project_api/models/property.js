const mongoose = require("mongoose");

const Property = mongoose.model('Property' , new mongoose.Schema({
    name : String ,
    price : String ,
    agentId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Users'
    },
    agencyId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Users'
    },
    isFeatured : Boolean ,
    isSoldOut : Boolean ,
    description : {
        detailSummary : String ,
        propertyType : String ,
        status : String ,
        rooms : Number ,
        bedrooms : Number ,
        bathrooms : Number ,
        floors : Number ,
        garage : Number ,
        area : Number ,
        size : Number 
    },
    floorPlans : [
        {
            floorId : String ,
            floorNo : String ,
            size : Number ,
            rooms : Number ,
            bathrooms : Number ,
            detailSummary : String ,
            planImage : [String],
        }
    ] ,
    features : [String],
    location : {
        address : String ,
        country : String ,
        city : String ,
        state : String ,
        zipcode : String ,
        neighborhood : String 
    },
    media : {
        photos : [String],
        videoUrl : String
    }

}))

module.exports = Property;