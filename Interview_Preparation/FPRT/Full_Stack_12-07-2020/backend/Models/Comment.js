const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentText: { type: String, required: true, trim: true },
    user: { type: Schema.Types.ObjectId, ref: "users" },
    blogPost: { type: Schema.Types.ObjectId, ref: "bolgposts" }
}, {timestamps: true});

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;