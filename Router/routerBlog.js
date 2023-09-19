const express = require('express');
const  [fetchAllProducts, fetchProductsByid,DeleteProduct, updateQuantityProduct, fetchCreateProduct ]  = require('../contraller/products');
const router = express.Router();

router.get('/', fetchAllProducts).get( '/:slug',fetchProductsByid ).delete('/:slug', DeleteProduct).patch('/', updateQuantityProduct).post('/', fetchCreateProduct)

module.exports = router;


