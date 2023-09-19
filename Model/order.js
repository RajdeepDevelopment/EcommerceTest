const mongoose = require('mongoose');

const order = new mongoose.Schema(
     {
        item: [
            {
                title: String,
                description: String,
                price: Number,
                discountPercentage: Number,
                rating: Number,
                stock: Number,
                brand: String,
                category: String,
                thumbnail: String, // URL should be stored as a String
                images: [String], // Array of URLs should be stored as an Array of Strings
                quantity: Number,
                userid: String,
                id: Number
            }
        ],
        totalAmount: Number,
        totalItems: Number,
        user: {
            _id: String,
            email: String,
            password: String,
            Comfirmpassword: String, // Note: Typo in "Comfirmpassword"
            addresses: [
                {
                    name: String,
                    email: String,
                    "street-address": String, // Consider renaming this property without hyphen
                    city: String,
                    region: String,
                    "postal-code": String,// Consider renaming this property without hyphen
                    _id: String
                }
            ],
            id: Number
        },
        paymentMethod: String,
        chooseAddress: {
            name: String,
            email: String,
            "street-address": String, // Consider renaming this property without hyphen
            city: String,
            region: String,
            "postal-code": String // Consider renaming this property without hyphen
        },
        status: String,
        id: Number

    
    }
    
     

)

const Orders = mongoose.model('order', order);
module.exports = Orders;
