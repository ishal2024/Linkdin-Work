const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const isLoggedIn = require('../middlewares/loggedIn.middleware')


router.post('/register' , authController.registerUser)

router.post('/login' , authController.logInUser)

router.get('/logout' , authController.logOutUser)

router.get('/getUser' , isLoggedIn , authController.getUser)


module.exports = router