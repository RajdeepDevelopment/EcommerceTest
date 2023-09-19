const express = require ('express');
const [createOrder, fetchOrderByid, fetchAllOrder, fetUpdateOrders] = require('../contraller/order')

const router = express.Router();

router.get('/', fetchAllOrder).get('/:slug', fetchOrderByid).post('/',createOrder).patch('/', fetUpdateOrders);

module.exports = router;