const express = require('express');
const router = express.Router();

router.get('/' , async(req , res) => {
    res.send('hello from agents end point');
})



module.exports = router ;