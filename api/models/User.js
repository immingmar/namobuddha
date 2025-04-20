const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema ({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    username: { type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true, // This is a Schema options not Schema fieldAutomatically adds `createdAt` and `updatedAt` fields to the schema
  }
); 

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;