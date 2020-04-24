const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
	review: { type: String, required: true, trim: true },
	likes: { type: Number, required: true, trim: true },
	dislikes: { type: Number, required: true, trim: true },
	date: { type: Date, required: true, default: Date.now },
	product: {type: Schema.Types.ObjectId, ref: "Products"},
	user: {type: Schema.Types.ObjectId, ref: "Users"},
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;