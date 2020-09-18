const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: { type: String, max: 100, required: true, trim: true },
    middleName: { type: String, max: 100, trim: true },
    lastName: { type: String, max: 100, required: true, trim: true },
    username: { type: String, max: 100, required: true, trim: true },
    emailId: { type: String, max: 100, trim: true, unique: true, required: true },
    password: { type: String, min: 4, max: 100, required: true, trim: true },
    userBio: { type: String, max: 500, trim: true, default: ""},
    role: { type: Number, default: 0},
    token: { type: String },
    tokenExp: { type: Number },
}, { 
    timestamps: true 
});


const User = mongoose.model("users", userSchema);

module.exports = User