const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
        firstName: { type: String, required: true, trim: true },
        middleName: { type: String, required: true,trim: true },
        lastName: { type: String, required: true, trim: true },
        username: { type: String, required: true, trim: true },
        emailId : { type: String, required: true, lowercase: true, trim: true },
        password : { type: String, required: true, trim: true },
        ratings: [{type: Schema.Types.ObjectId, ref: "Ratings"}],
        reviews: [{type: Schema.Types.ObjectId, ref: "Reviews"}],
        likedReviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }],
        dislikedReviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }],
        token: { type: String}
});

const Admins = mongoose.model("Admins", adminSchema);

module.exports = Admins;