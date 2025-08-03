const mongoose = require('mongoose')


 async function connectDB(){
    try {
        const res = await mongoose.connect(process.env.DB_URL)
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB