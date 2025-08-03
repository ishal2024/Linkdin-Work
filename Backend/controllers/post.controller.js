const postModel = require('../models/post.model')
const mongoose = require('mongoose')

async function createPost(req, res) {
    try {
        if (!req?.body?.content) return res.status(400).json({ message: "Please enter Content" })
         if (!req?.body?.content.length === 0) return res.status(400).json({ message: "Please enter Content" })
        if (req?.body?.content.length > 500) {
            return res.status(400).json({ message: "Content too long (max 500 characters)" });
        }

        const post = await postModel.create({
            content: req?.body?.content,
            owner: req?.user?._id
        })

        res.status(200).json({ message: "Post is created", post })
    } catch (error) {
        res.status(500).json({ message: "Internal Sever Error", error: error?.message })
    }
}

async function deletePost(req , res) {
    try {
        const postId = req?.params?.postId
        if (!mongoose.Types.ObjectId.isValid(postId)) return res.status(400).json({ message: "Invalid ID" });

        const post = await postModel.findById(postId)
        if(!post) return res.status(400).json({ message: "Post Not Found" });

        await postModel.findByIdAndDelete(postId)

        res.status(200).json({ message: "Post Is Deleted" , post });

    } catch (error) {
        res.status(500).json({ message: "Internal Sever Error", error: error?.message })
    }
}

async function getAllPost(req, res) {
    try {
        const userPosts = await postModel.find({ owner: req?.user?._id })
        if (userPosts.length === 0) return res.status(400).json({ message: "No Post Available", userPosts: [] })
        res.status(200).json({ message: "user Posts", userPosts })
    } catch (error) {
        res.status(500).json({ message: "Internal Sever Error", error: error?.message })
    }
}

module.exports = { createPost, getAllPost , deletePost }