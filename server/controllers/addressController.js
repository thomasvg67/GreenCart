import Address from "../models/Address.js"

//Add address : /api/address/add
export const addAddress = async (req, res) => {
    try {
        const { address} = req.body
        await Address.create({ ...address, userId: req.userId })
        res.json({ success: true, message: "Address added successfully" })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })

    }
}

//Get address : /api/address/get
export const getAddress = async (req, res) => {
    try {
        const addresses = await Address.find({ userId: req.userId })
        res.json({ success: true, addresses })
    }
    catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })

    }
}