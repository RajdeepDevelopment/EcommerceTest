const express = require('express');
const [fetchAllBrands, createBrand]  = require('../contraller/brands');
//const createBrand = require('../contraller/brands')
const router = express.Router();

router.get('/', fetchAllBrands ).post('/', createBrand);

module.exports = router;