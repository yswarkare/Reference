const express = require("express");
const { userAuth } = require("../Utils/Auth");
const BlogPost = require("../Models/BlogPost");
const User = require("../Models/User");
const router = express.Router();

router.get("/get-user-blog-posts", userAuth, async (req, res) => {
    try {
        let userBlogPosts = await BlogPost.find({user: req.user._id}).populate("user")
        return res.json({ success: true, message: "Got User BlogPosts Successfully", userBlogPosts})
    } catch (err) {
        return res.json({ success: false, message: "Failed to get user BlogPosts", error: `${err}`})
    }
})

router.post("/make-blog-post", userAuth, async (req, res) => {
    try {
        console.log(req.body)
        let blogPost = new BlogPost ({
            blogPostText : req.body.blogPost.blogPostText,
            user: req.body.blogPost.user,
        })
        await blogPost.save()
        return res.json({ success: true, message: "BlogPost posted successfully", blogPost})
    } catch (err) {
        return res.json({success: false, message: "failed to post BlogPost", error: `${err}`})
    }
})

router.patch("/update-blog-post", userAuth, async (req, res) => {
    try {
        let blogPost2 = await BlogPost.findOneAndUpdate({_id: req.body._id}, {
            blogPostText : req.body.blogPostText
        })
        let blogPost = await BlogPost.findOne({_id: req.body._id}).populate("user")
        return res.json({ success: true, message: "BlogPost updated successfully", blogPost, blogPost2}) 
    } catch (err) {
        return res.json({success: false, message: "failed to update BlogPost", error: `${err}`, input:(req.body)})
    }
})

router.patch("/delete-blog-post", userAuth, async (req, res) => {
    try {
        console.log(req.body)
        let blogPost = await BlogPost.findOneAndDelete({_id: req.body._id})
        return res.json({ success: true, message: "BlogPost deleted successfully", blogPost}) 
    } catch (err) {
        return res.json({success: false, message: "failed to delete BlogPost", error: `${err}`})
    }
})

module.exports = router;