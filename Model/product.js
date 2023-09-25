const mongoose = require('mongoose');
 
const productSchema = new mongoose.Schema({

  

  title: {
    type: String,
    required: true,
    unique: true,
   
  },
  deleteStatus: {type: Boolean},


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
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },

  review: [{
    UserName: String,
     reviewText: String,
  }],
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
      required: true,
    },
  ],
});

const Product = mongoose.model('Product', productSchema);
productSchema.index({ title: 2 }, { unique: true }); // Remove this line

module.exports = Product;
