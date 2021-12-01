const express = require('express');
const router = express.Router();
const Properties = require('../services/properties'); 



router.post('/addProperty' , Properties.addProperty);
router.post('/addReview' , Properties.addReview);
router.post('/getAllProperty' , Properties.getAllProperty);
router.post('/getPropertyById' , Properties.getPropertyById);
router.post('/getPropertyByAgentId' , Properties.getPropertyByAgentId);
router.post('/getPropertyByAgencyId' , Properties.getPropertyByAgencyId);
router.post('/getProperyBySearch' , Properties.getPropertyBySearch);

module.exports = router ;