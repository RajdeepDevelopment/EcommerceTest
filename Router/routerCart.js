
const express = require('express');
const [fetchCreateCart, fetchCartByid, fetchAllCart,updateCart, removeCart] = require('../contraller/Cart')

const router = express.Router();

router.get('/', fetchAllCart).get('/:slug',fetchCartByid ).post('/', fetchCreateCart).patch('/', updateCart).delete('/:slug', removeCart); 

module.exports = router;
