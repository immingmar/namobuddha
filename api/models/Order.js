const mongoose = require("mongoose");

// Define the Order schema
const orderSchema = new mongoose.Schema ({
    userId: { type: String, required: true, unique: true},
    products: [{
        productId: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
        },
    },],
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    status: {type: String, default: "pending"},

},
{
    timestamps: true, // This is a Schema options not Schema fieldAutomatically adds `createdAt` and `updatedAt` fields to the schema
  }
); 

// Create the Order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;