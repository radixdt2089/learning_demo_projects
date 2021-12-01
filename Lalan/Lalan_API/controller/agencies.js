const express = require('express');
const router = express.Router();

router.get('/' , (req , res , next) => {
    res.send('hello from agencies end point');
    next();
})


module.exports = router ;