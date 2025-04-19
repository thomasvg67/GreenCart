import User from "../models/User.js"

//Update user cart data : /api/cart/update
export const updateCart = async (req, res) => {
    try {
        const userId = req.userId; // get from session/middleware
        const { cartItems } = req.body;
        await User.findByIdAndUpdate(userId, { cartItems })
        res.json({ success: true, message: "Cart updated" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}