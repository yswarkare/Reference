const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
    blogPostText: { type: String, trim: true },
    user: { type: Schema.Types.ObjectId, ref: "users" },
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
    commentedUsers: [{ type: Schema.Types.ObjectId, ref: "users" }],
    likes: { type: Number, trim: true },
    usersWhoLikedIt: [{ type: Schema.Types.ObjectId, ref: "users" }],
}, {timestamps: true});

const BlogPost = mongoose.model("blogposts", blogPostSchema);

module.exports = BlogPost;