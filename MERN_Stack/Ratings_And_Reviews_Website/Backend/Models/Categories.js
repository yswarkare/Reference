const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    category: {
        categoryName: { type: String, unique: true, required: true, trim: true },
        products: [{type: Schema.Types.ObjectId, ref: "Products"}],
        subCategories: [{type: Schema.Types.ObjectId, ref: "SubCategories"}]
    }
});

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = Categories;