const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    bio : {
        type : String,
        default : "",
    },

    password : {
        type : String,
        required : true,
        select : false,
    }

} , {timestamps : true})


module.exports = mongoose.model('User' , userSchema)