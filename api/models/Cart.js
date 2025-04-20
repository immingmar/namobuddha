const mongoose = require("mongoose");

// Define the cart schema
const cartSchema = new mongoose.Schema ({
    userId: { type: String, required: true, unique: true},
    products: [{
        productId: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
        }
    }]
},
{
    timestamps: true, // This is a Schema options not Schema fieldAutomatically adds `createdAt` and `updatedAt` fields to the schema
  }
); 

// Create the Cart model
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;