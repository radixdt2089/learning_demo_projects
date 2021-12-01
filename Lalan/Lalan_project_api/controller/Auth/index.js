const express = require('express');
const router = express.Router();
const Auth = require('../../services/auth');


router.post('/register' , Auth.register);
router.post('/login' , Auth.login);

module.exports = router ;