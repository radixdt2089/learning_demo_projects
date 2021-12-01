const db = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.config = require('../config');
const Mail = require('../domain/mail');

class Auth {
    static async register(req , res) {

        const allUsers = await db.Auth.findOne({email : req.body.email}) ;
        if(!allUsers){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password , salt);
            req.body.password = hashedPassword;

            try {
                const authUser = new db.Auth(req.body);
                const result = await authUser.save();
                const user = new db.Users(req.body) 
                const response = await user.save();

                res.status(200).send('You are successfuly register');
                console.log(result)
            }
            catch(err) {
                res.status(500).json(err);
            }
        }
        else {
            res.status(403).json({error :'User Already exists!'});
        }    
    }

    static async login(req, res){
        const user = await db.Auth.findOne({email :req.body.email});
        if(user && bcrypt.compareSync(req.body.password , user?.password)){
            
            let token = jwt.sign(req.body, global.config.secretKey , {
                algorithm:global.config.algorithm,
                expiresIn:'50m'
            });
            // Mail.sendMail('ankur.chovatiya1856@gmail.com' , 'test' , "test content");
            console.log('login successfull');
            res.status(200).json({
                message: 'login scuccessful',
                jwtoken: token
            });
        }
        else{
            res.status(403).send('Email or password does not match!');
        }        

    }


}

module.exports = Auth;  