const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    middleName: { type: String, trim: true },
    lastName: { type: String, required: true, trim: true },
    username: { type: String, required: true, lowercase: true, trim: true },
    emailId : { type: String, required: true, lowercase: true, trim: true },
    password : { type: String, required: true, trim: true },
    blogPosts: [{ type: Schema.Types.ObjectId, ref: "blogposts" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
    likedBlogPosts: [{ type: Schema.Types.ObjectId, ref: "blogposts" }],
    followers: [{ type: Schema.Types.ObjectId, ref: "users" }],
    following: [{ type: Schema.Types.ObjectId, ref: "users" }]
});

const User = mongoose.model("users", userSchema);

module.exports = User;