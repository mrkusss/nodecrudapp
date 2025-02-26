const mongoose = require('mongoose');

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

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;