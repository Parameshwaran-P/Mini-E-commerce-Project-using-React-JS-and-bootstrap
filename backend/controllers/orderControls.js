
const orderModel=require('../modules/orderModule')
exports.createOrders=async (req, res, next)=>{
           const cartItems=req.body;
           const amount=Number(cartItems.reduce((acc, item)=>(acc + item.product.price * item.qty),0)).toFixed();
           const status = 'pending'
           console.log(amount);

        const order = await orderModel.create({cartItems, amount, status})

    res.json({
        success: true,
        order
    })
}