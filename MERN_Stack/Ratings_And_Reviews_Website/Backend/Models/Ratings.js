const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ratingsSchema = new Schema({
	rating: { type: String, required: true, trim: true },
	product: {type: Schema.Types.ObjectId, ref: "Products"},
	user: {type: Schema.Types.ObjectId, ref: "Users"},
});

const Ratings = mongoose.model("Ratings", ratingsSchema);

module.exports = Ratings;