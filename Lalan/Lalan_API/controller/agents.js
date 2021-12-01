const express = require('express');
const router = express.Router();

router.get('/' , (req , res , next) => {
    res.send('hello from agents end point');
    next();
})


module.exports = router ;