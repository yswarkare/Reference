const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subCategoriesSchema = new Schema({
        subCategoryName: { type: String, required: true, trim: true },
        products: [{type: Schema.Types.ObjectId, ref: "Products"}],
        subSubCategories: [{type: Schema.Types.ObjectId, ref: "SubSubCategories"}]
});

const SubCategories = mongoose.model("SubCategories", subCategoriesSchema);

module.exports = SubCategories;