const express = require('express');
const router = express.Router();
const agentRouter = require('./agents');
const agenciesRouter = require('./agencies');
const propertiesRouter = require('./properties');
const usersRouter = require('./users');
const authRouter = require('./Auth/index');
const contactRouter = require('./contact');

router.get('/', (req , res) => {
    res.send('Hello from router controller!');
});
    


router.use('/agents' , agentRouter);
router.use('/agencies' , agenciesRouter);
router.use('/properties' , propertiesRouter);
router.use('/users' , usersRouter);
router.use('/auth' , authRouter)    
router.use('/contact' , contactRouter)    
module.exports = router ;