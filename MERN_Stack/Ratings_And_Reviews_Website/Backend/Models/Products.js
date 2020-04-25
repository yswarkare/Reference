const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    productName : { type: String, required: true, trim: true },
    brandName: { type: String, required: true, trim: true },
    productDescription : { type: String, required: true, trim: true },
    category: {type: Schema.Types.ObjectId, ref: "Categories"},
    subCategory : {type: Schema.Types.ObjectId, ref: "SubCategories"},
    subSubCategory : {type: Schema.Types.ObjectId, ref: "SubSubCategories"},
    ratings: [{type: Schema.Types.ObjectId, ref: "Ratings"}],
    reviews: [{type: Schema.Types.ObjectId, ref: "Reviews"}]
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;