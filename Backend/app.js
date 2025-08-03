const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db.config')
const cookieparser = require('cookie-parser')
const app = express()
const cors = require('cors')

connectDB()

app.use(express.json())
app.use(cookieparser())
app.use(express.urlencoded({extended : true}))

const allowedOrigins = ['http://localhost:5173', 'https://linkdinass.netlify.app']

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))


//Router Imports
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

//Rouets
app.use('/api/v1/user' , userRouter)
app.use('/api/v1/post' , postRouter)


app.get('/' , function(req,res){
    res.send("Hello World")
})


app.listen(process?.env?.PORT || 5000)
