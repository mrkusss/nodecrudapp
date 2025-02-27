const express = require("express"); // Import express module
const mongoose = require("mongoose"); // import module mongoose that helps us in work with mongoDB
const productRoute = require("./routes/product.route.js"); // Importing the product route module to handle product-related API endpoints
require("dotenv").config(); //imports .env variables 

const PORT = process.env.PORT;
const app = express(); // creating a server

// Middleware to parse incoming JSON requests
app.use(express.json());
// Middleware to parse URL-encoded data from form submissions
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

// '/' -> homepage
//req -> request from user, res -> responce from server
//.send -> prints message on webpage
app.get("/", (req, res) => {
  res.send("hello from my server)");
});

/*
    We can also put server here  but its better to put it after connecting to database
    in .then method because its better to first check the database connection and after 
    that put the server on port 3000 in our case

    Putting server for listening port 3000
    app.listen(PORT, () => {
        console.log("hello thats mrkus_sss server)");
    });

*/

// connecting database to project within mongoose
// .connect -> has as argument connecting string to or mongoDB database
// then,catch -> I using them to catch error and it helps me to know if database connected or No
mongoose
  .connect(
    process.env.MONGODB_URI 
  )
  .then(() => {
    console.log("Connected to database!");
    //Putting server for listening port 3000
    app.listen(PORT, () => {
      console.log("hello thats mrkus_sss server)");
    });
  })
  .catch(() => {
    console.log("Connection to database failed!");
  });
