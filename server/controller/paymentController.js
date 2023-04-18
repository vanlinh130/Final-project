const Razorpay = require('razorpay');
const instance= new Razorpay({
    key_id: 'rzp_test_ndeuf3koWE9dH4',
    key_secret: 'CvimHAGkgie3VWdd5pN5Cg4k'
});

const checkout = async (req, res) => {
    const { amount } = req.body
    const option = {
        amount: amount ,
        currency: "INR"
    }
    const order = await instance.orders.create(option) 
    res.json({
        success: true,
        order
    })
}

const paymentVerification = async (req, res) => {
    const { razorpayOrderId, razorpayPaymeentId} = req.body
    res.json({
        razorpayOrderId, razorpayPaymeentId
    })
}

module.exports = {
    checkout, paymentVerification
}