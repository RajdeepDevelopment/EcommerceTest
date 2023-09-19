const mongoose = require('mongoose');

const ModelReview = new mongoose.Schema({

    productId: String,
    userName: String,
    reviewsText: String,
    postTime: String
});

const Reviews = mongoose.model('review',ModelReview );

module.exports = Reviews;