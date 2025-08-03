const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')
const isLoggedIn = require('../middlewares/loggedIn.middleware')

router.post('/create' , isLoggedIn , postController.createPost)

router.get('/delete/:postId' , isLoggedIn , postController.deletePost)

router.get('/getPost' , isLoggedIn , postController.getAllPost)

module.exports = router