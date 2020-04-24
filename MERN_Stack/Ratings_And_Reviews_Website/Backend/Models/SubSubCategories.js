const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subSubCategoriesSchema = new Schema({
    subSubCategoryName: { type: String, required: true, trim: true },
    products: [{type: Schema.Types.ObjectId, ref: "Products"}],		
});

const SubSubCategories = mongoose.model("SubSubCategories", subSubCategoriesSchema);

module.exports = SubSubCategories;