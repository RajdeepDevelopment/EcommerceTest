
const express = require ('express');
const [fetchAllCatagory, createCatagory] = require('../contraller/Catagory')
const router = express.Router();


router.get('/',fetchAllCatagory).post('/', createCatagory);

module.exports = router
