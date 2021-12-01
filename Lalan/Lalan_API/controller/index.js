const express = require('express');
const router = express.Router();
const agentRouter = require('./agents');
const agenciesRouter = require('./agencies');
const propertiesRouter = require('./properties');

router.get('/', (req , res , next) => {
    res.send('Hello from router controller!');
    next();
});

router.use('/agents' , agentRouter);
router.use('/agencies' , agenciesRouter);
router.use('/properties' , propertiesRouter);
    
module.exports = router ;