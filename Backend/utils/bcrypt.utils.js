const bcrypt = require('bcrypt')


async function passwordHash(password){
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password , salt)
    return hashPass
}

async function passwordCompare(password , hashPass){
    const res = await bcrypt.compare( password , hashPass)
    return res
}

module.exports = {passwordHash , passwordCompare}