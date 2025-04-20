const express = require('express');
const router = express.Router();
const User = require("../models/User")
// Import CryptoJS for password hashing
const CryptoJS = require("crypto-js");

const jwt = require("jsonwebtoken");

//REGISTER

router.post("/register", async (req, res) => {
    const newUser = new User ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        //password: req.body.password,
    }); 
    try{
        const savedUser = await newUser.save();
       return res.status(201).json(savedUser);
    } catch (err) {
       return res.status(500).json(err);
    }
    
   
    
})

 //LOGIN
 router.post("/login", async (req, res) => {
    
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) {
            return res.status(401).json("Wrong credentials!");
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if (originalPassword !== req.body.password) {
            return res.status(401).json("Wrong credentials!");
        }
        
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        } , process.env.JWT_SECRET_KEY, {expiresIn: "3d"});
        
        // Destructure the user object to exclude the password field
        const {password, ...others} = user._doc;

        // Send the response with the user data excluding the password
        return res.status(200).json({ ...others, accessToken });
    } catch (err) {
        console.error("Error during login:", err); // Log the error
        return res.status(500).json(err);
    }
})

module.exports = router;
