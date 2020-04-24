const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    fullName: {
        firstName: { type: String, required: true, trim: true },
        middleName: { type: String, required: true,trim: true },
        lastName: { type: String, required: true, trim: true }
    },
        userName: { type: String, required: true, trim: true },
        emailId : { type: String, required: true, lowercase: true, trim: true },
        password : { type: String, required: true, trim: true },
        ratings: [{type: Schema.Types.ObjectId, ref: "Ratings"}],
        reviews: [{type: Schema.Types.ObjectId, ref: "Reviews"}],
        likedReviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }],
        dislikedReviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }]
});

const Admins = mongoose.model("Admins", adminSchema);

module.exports = Admins;