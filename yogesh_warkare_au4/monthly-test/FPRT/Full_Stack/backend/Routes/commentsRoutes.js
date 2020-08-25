const express = require("express");
const Comment = require("../Models/Comment");
const User = require("../Models/User");
const BlogPost = require("../Models/BlogPost");
const { userAuth } = require("../Utils/Auth");
const router = express.Router();

router.post("/post-comment", userAuth, async (req, res) => {
    try {
        let comment = new Comment ({
            commentText : req.body.commentText,
            user: req.body.user,
            blogPost: req.body.blogPost
        })
        await comment.save()
        return res.json({ success: true, message: "Comment posted successfully"})
    } catch (err) {
        return res.json({success: false, message: "failed to post Comment", error: `${err}`})
    }
})

router.patch("/update-comment", userAuth, async (req, res) => {
    try {
        let comment = await Comment.findOneAndUpdate({_id: req.body._id}, {
            commentText : req.body.commentText
        })
        return res.json({ success: true, message: "Comment updated successfully", comment})
    } catch (err) {
        return res.json({success: false, message: "failed to update Comment", error: `${err}`})
    }
})

module.exports = router;