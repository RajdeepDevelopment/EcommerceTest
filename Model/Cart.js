const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  quantity: {
    type: Number,
    default: 1, // Default quantity is 1 if not provided
  },
  userid: {
    type: String, // Assuming userid is a numeric field
    required: true,
  },
  id: {
    type: Number, // Assuming id is a numeric field
    required: true,
  },
});

const Carts = mongoose.model('cart', CartSchema);

module.exports = Carts;
