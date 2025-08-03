const jwt = require('jsonwebtoken')

async function generateToken(data , secretKey){
    const token =  jwt.sign(data , secretKey)
    return token
}

async function verifyToken(token , key){
     const res =  jwt.verify(token , key)
     return res
}

module.exports = {generateToken , verifyToken}