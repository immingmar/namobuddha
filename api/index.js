// Import the Express.js framework
const express = require("express");

const cors = require('cors');

// Create an instance of the Express application
const app = express();

// Enable CORS for front-end origin
app.use(cors({ origin: "http://localhost:3000"}));

// Import the dotenv package to manage environment variables
const dotenv = require("dotenv");

// Import user routes from the routes directory
const userRoutes = require("./routes/user");

// Import authentication routes from the routes directory
const authRoute = require("./routes/auth");

const productRoute = require('./routes/product'); // Import product routes
const cartRoute = require('./routes/cart'); // Import cart routes

const orderRoute = require('./routes/order'); // Import order routes
// Configure dotenv to load environment variables from a .env file into process.env
dotenv.config();

// Define a constant for the port number where the server will listen
const PORT = process.env.PORT || 5000; // Ensure the port is set to 5000

// Import Mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Connect to MongoDB using the URL stored in the environment variable `MONGO_URL`
mongoose.connect(process.env.MONGO_URL)
    // If the connection is successful, log a success message
    .then(() => console.log("DB connection successful"))
    // If there is an error, catch it and log the error message
    .catch((err) => {
        console.log(err);
    });
// Example API route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API!' });
  });
// Middleware to parse incoming JSON requests and make the data accessible via req.body
app.use(express.json());

// Middleware to route requests starting with "/api/users" to the userRoutes handler
app.use("/api/users", userRoutes);

// Middleware to route requests starting with "/api/auth" to the authRoute handler
app.use("/api/auth", authRoute);

app.use("/api/products", productRoute); // Mount product routes

app.use("/api/carts", cartRoute); // Mount cart routes

app.use("/api/orders", orderRoute);

// Start the server and make it listen on the specified port (5000)
// Log a message indicating the server is running
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}!`);
});
