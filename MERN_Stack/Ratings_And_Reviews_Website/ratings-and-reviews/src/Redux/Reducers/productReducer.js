import productState from "../States/productState";

let productReducer = ( state = productState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case "Set_Product_Name":
            stateCopy.product.productName = action.payload;
            return stateCopy

        case "Set_Product_Description":
            stateCopy.product.productDescription = action.payload;
            return stateCopy
            
        case "Set_Product_Category":
            stateCopy.product.category = action.payload;
            return stateCopy
            
        case "Set_Product_Sub_Category":
            stateCopy.product.subCategory = action.payload;
            return stateCopy

        case "Set_Product_Sub_Sub_Category":
            stateCopy.product.subSubCategory = action.payload;
            return stateCopy

        case "Add_Product":
            stateCopy.products.push(stateCopy.product);
            return stateCopy

        default:
        console.log(stateCopy);
    }

    return state = JSON.parse(JSON.stringify(stateCopy));
}

export default productReducer;