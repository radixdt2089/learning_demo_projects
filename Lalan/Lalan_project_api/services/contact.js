const db = require('../models')

class Contact {
    static async addInquiry(req , res) {
        try{
            const inquiry = new db.Leads(req.body);
            const result = await inquiry.save();
            res.status(200).send('Your request is sent successfully');
        }
        catch(err) {
            res.status(500).send(err);
        }
    }

}

module.exports = Contact ;