const db = require('../models')

class Properties {

    static async addProperty(req , res){
        try {
            const property = new db.Property(req.body);
            const result = await property.save();
            res.status(200).send(result);
        }
        catch(err){
            res.status(500).send(err);
        }
    }

    static async addReview(req , res){
        try {
            const review = new db.Review(req.body);
            const result = await review.save();
            res.status(200).send(result);
        }
        catch(err) {
            res.status(500).send(err)
        }
    } 

    static async getAllProperty(req , res) {
        const pageLimit = req.body.pageSize || 0;
        const pageOffset = (req.body.pageNo-1)*pageLimit;
        try {
            const properties = await db.Property.find().limit(pageLimit).skip(pageOffset);
            res.status(200).send(properties);
        }
        catch(err){
            res.status(500).send(err);
        }
    }

    static async getPropertyById(req , res) {
        const propertyId = req.body.id;
        try {
            const property = await db.Property.findOne({_id : propertyId});
            res.status(200).send(property);
        }
        catch(err){
            res.status(500).send(err);
        }
    }

    static async getPropertyByAgentId(req, res) {
        const agentId = req.body.agentId;
        try {
            const properties = await db.Property.find({agentId : agentId});
            res.status(200).send(properties);
        }
        catch(err){
            res.status(500).send(err);
        }
    }

    static async getPropertyByAgencyId(req, res) {
        const agentId = req.body.agencyId;
        try {
            const properties = await db.Property.find({agencyId : agentId});
            res.status(200).send(properties);
        }
        catch(err){
            res.status(500).send(err);
        }
    }
    
    static async getPropertyBySearch(req, res) {
        const searchObj = req.body;
        try {
            const properties = await db.Property.find(searchObj);
            res.status(200).send(properties);
        }
        catch(err){
            res.status(500).send(err);
        }
    }

}

module.exports = Properties;