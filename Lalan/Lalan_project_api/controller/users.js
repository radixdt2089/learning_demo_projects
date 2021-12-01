const express = require('express');
const router = express.Router();
const Users = require('../services/users');
const security = require('../middleware/jwt');


// router.use(security);
router.post('/addUser' , Users.addUser);
router.get('/getAllUsers' , Users.getAllUsers);
router.post('/getUserById' , Users.getUserById);

module.exports = router ;