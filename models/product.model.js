const mongoose = require('mongoose'); // imports mongoose

/*
    creating a blueprint by what we will create our products
        .Schema method helps us to create schema
        in first {} we are creating blueprint of how product will look 
        as keys we choosing name of data and as a value we are using an dictionary 
        which contains type of data which we would put as a value to key and 
        the second key this makes our data required or not 
        and it contains an boolean and if we want to log some message if admin wouldn't 
        enter required data
        As a second dictionary we have timestaps and its adding to our product to database 
        information about when was the last update and when was this object created
*/
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter your product name"]
        },

        quantity: {
            type: Number,
            required: [true, "Enter quantity of product"],
            default: 0
        },

        price: {
            type: Number,
            required: [true, "Enter your product price"],
            default: 0
        },

        description: {
            type: String,
            required: [false, "Enter your product description"]
        },

        image: {
            type: String,
            required: false

        },
    },
    {
        timestamps: true
    }
);

// by the method .model we addaing an model that we would use in our functions
// as arguments to .model we useing a name of model and the second argument is a blueprint of product
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;