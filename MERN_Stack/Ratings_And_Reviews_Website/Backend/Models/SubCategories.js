const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subCategoriesSchema = new Schema({
    subCategory: {
        subCategoryName: { type: String, unique: true, required: true, trim: true },
        Products: [{type: Schema.Types.ObjectId, ref: "Products"}],
        subSubCategories: [{type: Schema.Types.ObjectId, ref: "SubSubCategories"}]
    }
});

const SubCategories = mongoose.model("SubCategories", subCategoriesSchema);

module.exports = SubCategories;