require("dotenv").config()
const stripe = require("stripe").Stripe(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body)
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_methods_type:['card']
        })

        return {
            statusCode: 200,
            body: JSON.stringify({paymentIntent})
        }
    }

    catch (error) {
        console.log("🚀 ~ file: create-payment-intent.js:21 ~ exports.handler= ~ error:", error)
        return {
            status: 400,
            body:JSON.stringify({error})
        }
    }
}