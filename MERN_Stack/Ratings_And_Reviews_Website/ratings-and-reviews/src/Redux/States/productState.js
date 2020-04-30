let productState = {
    product: {
        _id: "",
        productName : "",
        brandName: "",
        productDescription : "",
        category: "",
        subCategory : "",
        subSubCategory : "",
        ratings: [],
        reviews: [],
        images: [],
        image: ""
    },
    editProduct: false,
    editIndex: "",
    products: [
        {
            _id: "",
            productName : "Product 1",
            brandName: "Brand name 1",
            productDescription : "Description 1",
            category: "",
            subCategory : "",
            subSubCategory : "",
            ratings: [],
            reviews: [],
            image: "",
            images: []
        },
        {
            _id: "",
            productName : "Product 2",
            brandName: "Brand Name 2",
            productDescription : "Description 2",
            category: "",
            subCategory : "",
            subSubCategory : "",
            ratings: [],
            reviews: [],
            images: [],
            image: "",
        },
    ],
    productsCopy: []
}

export default productState;