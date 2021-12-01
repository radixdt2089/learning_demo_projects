const mongoose = require("mongoose");

const Users = mongoose.model('Users' , new mongoose.Schema({
    name : String

}))

module.exports = Users;