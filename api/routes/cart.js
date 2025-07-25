const express = require('express');
const router = express.Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const Cart = require('../models/Cart');
//Create a new cart
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart (req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        return res.status(200).json(updatedCart);
    } catch (err) {
        return res.status(500).json(err);
    }
});


// Delet a cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        return res.status(200).json("Cart has been deleted...");
    } catch (err)  {
        return res.status(500).json(err);
    }
}); 

//  Get user cart 
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        return res.status(200).json(cart);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Get all carts
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        return res.status(200).json(carts);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;