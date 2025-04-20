require('dotenv').config(); // Load environment variables from .env file
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);

const createPaymentIntent = async (amount) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: 'usd',
        });
        return paymentIntent.client_secret
    } catch (err) {
        throw new Error(err.message);
    }
    
};

module.exports = {
    createPaymentIntent,
}; 

