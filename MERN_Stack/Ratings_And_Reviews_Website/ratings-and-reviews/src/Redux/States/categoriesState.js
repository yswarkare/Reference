let categoriesState = {
    category: {
        _id: "",
        categoryName: "",
        products: [],
        subCategories: []
    },
    categories: [{
        categoryName: "Home Appliances",
        products: [],
        subCategories: []
    },{
        categoryName: "Cloths",
        products: [],
        subCategories: []
    }],
    categoriesCopy: [],
    editIndex: ""
}

export default categoriesState;