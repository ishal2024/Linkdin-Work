const userModel = require("../models/user.model")
const { verifyToken } = require("../utils/jwt.utils")



async function isLoggedIn(req,res,next){
     try {
        if (!req?.cookies?.token) return res.status(400).json({ message: "Please Log In" })
        
        const decoded = await verifyToken(req?.cookies?.token , process.env?.TOKEN_SECRET_KEY)
        if(!decoded) return res.status(400).json({ message: "Invalid Token Id" })

        const user = await userModel.findOne({'_id' : decoded?.userId}).select("+password")
        if(!user) return res.status(400).json({ message: "User Not Found" })
        req.user = user
        next()

     } catch (error) {
        res.status(400).json({ message: "internal Server Error" , error : error?.message })
     }
}

module.exports = isLoggedIn