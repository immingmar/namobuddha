const express = require('express');
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const router = express.Router();
const Order = require('../models/Order');
const { createPaymentIntent } = require('./stripe'); // Import the createPaymentIntent function

// Create a new  order 
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order (req.body);
    try {
        const savedOrder = await newOrder.save();
        return res.status(201).json(savedOrder);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Create a payment intent
router.post("/payment", verifyToken, async (req, res) => {
    const {amount} = req.body;
    try {
        const clientSecret = await createPaymentIntent(amount);
        res.status(200).json({clientSecret});
    } catch (err) {
        res.status(500).json(err.message);
    }
});


// Update an order 
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate (
            req.params.id, 
            { $set: req.body},
            { new: true}
        );
        return res.status(200).json(updatedOrder);
    } catch (err) {
        return res.status(500).json(err);
    }
}); 

// Delete an order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const deleteOrder = await Order.findByIdAndDelete (req.params.id);
        return res.status(200).json("Order has been deleted....");
    } catch (err) {
        return res.status(500).json(err);
    }
});

// Get all orders (Admin only)
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(500).json(err);
    }
}); 

// Get user's order
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const userOrders = await Order.find({ userId: req.params.userId});
        console.log(req.params.userId);
        return res.status(200).json(userOrders);
    } catch (err) {
        return res.status(500).json(err);
    }
})


//Get monthly income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    console.log(date);
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

    console.log("Previous Month:", previousMonth);
    console.log("Last Month:", lastMonth);
    
    //Agggreation pipeline
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" }, //extracts month from createdAt
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        return res.status(200).json(income);
    } catch (err) {
        return res.status(500).json(err);
    }
});


module.exports = router;