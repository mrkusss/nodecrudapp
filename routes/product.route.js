const express = require("express");
const router = express.Router(); // creating a router thats helps us to call good function
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js'); // import of functions that we willl use in our API

//getting all products from database
router.get('/', getProducts);

//getting ne product by id
router.get("/:id", getProduct);

//creates product and ds it to database
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);




module.exports = router;