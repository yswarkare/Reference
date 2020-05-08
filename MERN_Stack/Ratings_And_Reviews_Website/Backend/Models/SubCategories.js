const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subCategoriesSchema = new Schema({
        subCategoryName: { type: String, required: true, trim: true },
        products: [{type: Schema.Types.ObjectId, ref: "products"}],
        subSubCategories: [{type: Schema.Types.ObjectId, ref: "subsubcategories"}]
});

const SubCategories = mongoose.model("SubCategories", subCategoriesSchema);

module.exports = SubCategories;