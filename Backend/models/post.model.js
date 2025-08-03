const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
    content : {
        type : String,
        required : true
    },

    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
    
} , {timestamps : true})

module.exports = mongoose.model('Post' , postSchema)