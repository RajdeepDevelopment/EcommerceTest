const express = require('express');
const [createUser, fetchUserById, fetchAllUsers, updateUserAddress, fetchUserById2] = require('../contraller/user'); //
const router = express.Router();

router.get('/', fetchAllUsers)
      .get('/id', fetchUserById)
      .get('/:slug', fetchUserById2)
      .post('/', createUser).patch('/:slug', updateUserAddress)

module.exports = router;
