

const mongoose = require('mongoose');
 const BrandSchema = new mongoose.Schema({
    value: {type: String,  unique: true } ,
    label: String,
    checked: Boolean,
 })

 const Brands = mongoose.model('brand', BrandSchema);

 module.exports =Brands;