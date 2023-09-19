const express = require("express");
const [fetchReviewsByProductId, fetchSaveNewReview]= require('../contraller/review')
const router = new express.Router();

router.get('/:slug', fetchReviewsByProductId).post('/', fetchSaveNewReview);


module.exports = router;