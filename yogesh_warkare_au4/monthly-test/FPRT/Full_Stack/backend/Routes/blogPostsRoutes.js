const express = require("express");
const { userAuth } = require("../Utils/Auth");
const BlogPost = require("../Models/BlogPost");
const User = require("../Models/User");
const router = express.Router();

router.post("/make-blog-post", userAuth, async (req, res) => {
    try {
        let blogPost = new BlogPost ({
            postText : req.body.postText,
            user: req.body.user,
        })
        await blogPost.save()
        return res.json({ success: true, message: "BlogPost posted successfully"})
    } catch (err) {
        return res.json({success: false, message: "failed to post BlogPost", error: `${err}`})
    }
})

router.patch("/update-blogPost", userAuth, async (req, res) => {
    try {
        let blogPost = await BlogPost.findOneAndUpdate({_id: req.body._id}, {
            postText : req.body.postText
        })
        return res.json({ success: true, message: "BlogPost updated successfully"}) 
    } catch (err) {
        return res.json({success: false, message: "failed to update BlogPost", error: `${err}`})
    }
})

module.exports = router;