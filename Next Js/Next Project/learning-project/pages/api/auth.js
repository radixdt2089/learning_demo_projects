import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {verifyToken } from '../../middleware/utils';

const KEY = process.env.JWT_KEY;

const USERS = [
    {
        id: 1,
        email: 'example1@example.com',
        password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
        createdAt: '2020-06-14 18:23:45',
      },
      {
        id: 2,
        email: 'example2@example.com',
        password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
        createdAt: '2020-06-14 18:23:45',
      },
      {
        id: 3,
        email: 'example3@example.com',
        password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
        createdAt: '2020-06-14 18:23:45',
      },
      {
        id: 4,
        email: 'example4@example.com',
        password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
        createdAt: '2020-06-14 18:23:45',
      },
]

export default (req , res) => {
    return new Promise(resolve => {

        const { method } = req;
        const { email , password } = req.body;
            
        // if email and password is missing

        if(method == 'POST') {
            
           
            if(!email || !password){
                return res.status(400).json({
                    status : 'error',
                    error : 'Request missing username and password'
                });
            }
        

        // check that user is exist or not 

        const user = USERS.find(user => {
            return user.email === email;
        })
        console.log(user);

        if(!user) {
            res.status(400).json({
                // email , password ,
                status : 'error',
                error : 'User Not Found'
            })
        }

        // if user is available

        if(user){
            const userId = user.id , userEmail = user.email , userPassword = user.password , userCreated = user.createdAt;

            bcrypt.compare(password , userPassword).then(isMatch => {
                if(isMatch){
                    // create JWT payload

                    const payload = {
                        id : userId,
                        email : userEmail ,
                        createdAt : userCreated
                    };
                    
                    jwt.sign(payload , KEY , {expiresIn : 31556926 } , (err , token) => {
                            res.status(200).json({
                                success : true ,
                                token : 'Bearer' + token,
                            });
                    })
                    
                }
            })
        } 
        console.log(verifyToken('BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJleGFtcGxlMUBleGFtcGxlLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjAtMDYtMTQgMTg6MjM6NDUiLCJpYXQiOjE2Mjc2NDc4MTUsImV4cCI6MTY1OTIwNDc0MX0.F0yRqFpvqYTdHFsnhcKQA1BGo7IPx0K7T--K9EWFhWo'));
    // verifyToken()
    }
        else {
            res.status(400).json({
                status : 'error',
                error : 'Password Incorrect!'
            });
        }
        return resolve();
    });
};