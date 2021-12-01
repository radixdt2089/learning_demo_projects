const db = require('../models')

class Users {
    static async addUser(req , res){
        try {
            const result = await db.Users.insertMany(req.body)
            res.status(200).send(result);
        }
        catch(err) {
            res.send(500).send(err);
        }
    }

    static async getAllUsers(req, res){
        try {
            const result = await db.Users.find();
            res.status(200).send(result);
        }
        catch(err){
            res.send(500).send(err);
        }
    } 
    
    static async getUserById(req , res){
        const UserId = req.body.userId;

        try {
            const result = await db.Users.findOne({_id : UserId}).populate('favouriteProperties');
            res.status(200).send(result);
        }
        catch(err){
            res.status(500).send(err);
        } 
    }
    
}

module.exports = Users;