const express = require('express');
const app = express();
const router = require('./controller/index');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());


const db = require("../Lalan_API/models");
const port = process.env.PORT || 8000;
const mongoDBConenctURL = process.env.MONGODB_CONECT_URL || "mongodb://localhost:27017/LalanDB"

// mongoDB connection
mongoose.connect(mongoDBConenctURL)
.then(() =>{
    console.log('Successfully connect to MongoDB.');
}).catch(err =>{
    console.log('Connection error...' , err);
});

// api requests
app.get('/' , (req , res) => {
    db.Property.find().then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    res.status(200).json({messages : 'Welcome to Lalan Project'});
})


app.get('/create' , (req , res) => {
    
    const User = new db.Users({name:'ankur patel'});
    User.save().then(result => {
        res.send(result)
        console.log(result);
    }).catch(err => {
        res.send(err);
        console.log(err);
    })
    // db.Users.insertOne({name:'ankur'}).then(result => {
        //     res.send(result)
        //     console.log(result);    
        // }).catch(err =>{
            //     res.send(err)
            //     console.log(err);
            // })
        })
        
        // router setup
        app.use('/Api' , router)
//middelware for error 
app.use((err , req , res , next)=>{
    if(err) throw err;
    else {
        next();
    }
});


app.listen(port , () => {
    console.log(`Searver is running on port ${port}......`);
})
