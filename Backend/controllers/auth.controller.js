const userModel = require('../models/user.model')
const { passwordHash, passwordCompare } = require('../utils/bcrypt.utils')
const { generateToken, verifyToken } = require('../utils/jwt.utils')

async function registerUser(req, res) {
    try {
        const { name, email, bio, password } = req?.body

        const user = await userModel.find({ email })
        if (user?.length !== 0) return res.status(400).json({ message: "User already Exist" })

        const hashPassword = await passwordHash(password)

        const createdUser = await userModel.create({
            name,
            email,
            bio: bio ? bio : "",
            password: hashPassword
        })

        res.status(200).json({ message: "User is created", createdUser })

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error?.message })
    }
}


async function logInUser(req, res) {
    try {
        const { email, password } = req?.body
        if (req?.cookies?.token){
            console.log(req?.cookies)
            const decoded = await verifyToken(req?.cookies?.token, process.env.TOKEN_SECRET_KEY)
            if (!decoded) return res.status(400).json({ message: "Invalid Token Id" })
            return res.status(400).json({ message: "User already Logged In" })
        }


        const user = await userModel.findOne({ email }).select("+password")
        if (!user) return res.status(400).json({ message: "Please enter valid email or password" })

        const result = await passwordCompare(password, user?.password)
        if (!result) return res.status(400).json({ message: "Please enter valid email or password" })

        const token = await generateToken({ email, 'userId': user?._id }, process.env.TOKEN_SECRET_KEY)
        console.log(token)
        const object = {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        }

        res.status(200).cookie('token', token, object).json({ message: "User is Logged In", user })


    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error?.message })
    }
}

async function logOutUser(req, res) {
    try {
        if (!req?.cookies?.token) return res.status(400).json({ message: "Please Log In" })

        const object = {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        }

        res.status(200).clearCookie("token" , object).json({message : "Logged Out Successfully"})

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" , error : error?.message })
    }
}

function getUser(req,res){
    if(!req?.user) return res.status(400).json({message : "user not found"})
    
    res.status(200).json({message : "User Found" , userInfo : req?.user})
}

module.exports = { registerUser, logInUser , logOutUser , getUser }