const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema ({
    title: { type: String, required: true, unique: true},
    desc: {type: String, required: true, unique: true},
    img: {type: String, required: true},
    categories: {type: Array},
    size: {type: String, required: true},
    
    price: {type: String, required: true},
},
{
    timestamps: true, // This is a Schema options not Schema fieldAutomatically adds `createdAt` and `updatedAt` fields to the schema
  }
); 

// Create the Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;