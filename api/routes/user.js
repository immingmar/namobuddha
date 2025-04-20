const express = require('express');
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('./verifyToken');
const User = require('../models/User');
const router = express.Router();
const CryptoJS = require("crypto-js"); // Import CryptoJS
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
   if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
   } else {
        delete req.body.password;
   }
   try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id , {
        $set: req.body,
    }, {new: true});
   return res.status(200).json(updatedUser);
   }catch (err) {
    return res.status(500).json(err);
   }
});
//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("User has been deleted...");
    } catch (err) {
        return res.status(500).json(err);
    }
});

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        return res.status(200).json(others);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
    const usersWithoutPasswords = users.map(user => {
        const {password, ...others} = user._doc;
        return others;
    });
    return res.status(200).json(usersWithoutPasswords);
    } catch (err) {
    return res.status(500).json(err); }
});

//GET USER STATS
router.get("/stats", verifyTokenAndAdmin,  async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1));

    try {
        const data = await User.aggregate([ 
            { $match: {createdAt: {$gte: lastYear}}}, //match the doucments that have been created in the last year
            { $project: {month: {$month: "$createdAt"}}}, //return the month of the createdAt field
            {$group: {_id: "$month", total: {$sum: 1}}} //group the documents by month and count the number of document in each monnth
        ]);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json(err);
    }
})




module.exports = router;