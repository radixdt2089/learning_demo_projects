const express = require('express');
const router = express.Router();
const Mail = require('../domain/mail');
const Contact = require('../services/contact');

router.get('/' , async(req , res) => {
    // Mail.sendMail('ankur.chovatiya1856@gmail.com' , 'test' , "test content");
    res.send('hello from contact end point');   

})

router.post('/lead' , Contact.addInquiry);


module.exports = router ;