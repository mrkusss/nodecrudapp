const Product = require("../models/product.model");

// this function is using to get all data about products in our database
// all of functions must be asynchronous!
const getProducts = async (req, res) => {
  try {
    // Product .find helps us to find product in database
    // in our case we want to see all products so we do not giving any arguments
    const products = await Product.find({});
    // by methos .status we checking if respond status is correct so 200 and if correct return data
    res.status(200).json(products);
  } catch (error) {
    // checking if status is 500 if error returning error message
    res.status(500).json({ message: error.message });
  }
};

// this function is using to get product from database by it ID
// because when we creating some products in mongodb automaticly gives it an ID  
const getProduct = async (req, res) => {
  try {
    const { id } = req.params; // checking for id
    const product = await Product.findById(id); // finding product by ID by method .findById
    res.status(200).json(product); // return an information about exact product 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// this function is using to create an product and pysh it to database
const createProduct = async (req, res) => {
  try {
    // we are using .create method to create product 
    const product = await Product.create(req.body);
    res.status(200).json(product); // return info about product that we created
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// this function is using to update our product 
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // getting existing data about product
    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // gettong data that we want to update
    const updateData = { ...req.body };

    // checking if image and description exist if no  saving value that we had before
    if (!req.body.image) updateData.image = existingProduct.image;
    if (!req.body.description) updateData.description = existingProduct.description;

    // update the product
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
        // helps us to return updated data
        new: true,
        // checks validation before saving
        runValidators: true,
    });

    res.status(200).json(updatedProduct);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// this function is using to delete product from database 
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // to delete some product from databse we using method .findByIdAndDelete()
    const product = await Product.findByIdAndDelete(id);

    // check if product exist if no return an message 
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};