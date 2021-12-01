const mongoose = require("mongoose");

const Property = mongoose.model('Property' , new mongoose.Schema({
    name : String

}))

module.exports = Property;