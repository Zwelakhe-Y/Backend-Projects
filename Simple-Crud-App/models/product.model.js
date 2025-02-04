const mongoose = require('mongoose');

//THIS ALLOWS US TO STATE HOW A PRODUCT SHOULD BE SAVED OR RECIEVED FROM THE FRONTEND TO THE DATABASE

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        price: {
            type: Number,//IF YOU STATE Number as type remeber javascript as case sensitive so its Number not Number
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },
    },

    {
        Timestamp: true,
    }
);

const Product = mongoose.model('Product', ProductSchema); //allows mongodb to usethis

module.exports = Product;