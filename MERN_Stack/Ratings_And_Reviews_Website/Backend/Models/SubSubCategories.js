const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subSubCategoriesSchema = new Schema({
    subSubCategory: {
        subSubCategoryName: { type: String, unique: true, required: true, trim: true },
        Products: [{type: Schema.Types.ObjectId, ref: "Products"}],		
    }
});

const SubSubCategories = mongoose.model("SubSubCategories", subSubCategoriesSchema);

module.exports = SubSubCategories;