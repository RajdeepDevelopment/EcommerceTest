const express = require('express');
 const [fetchAllSizes, createSizes] = require('../contraller/size')
const router = express.Router();

router.get('/', fetchAllSizes).post('/',createSizes ); 

module.exports = router;