import productState from "../States/productState";
import { 
    Get_All_Products,
    Set_Product_Name, 
    Set_Brand_Name,
    Set_Product_Image,
    Set_Product_Description, 
    Set_Product_Category, 
    Set_Product_Sub_Category, 
    Set_Product_Sub_Sub_Category, 
    Add_Product,
    Edit_Product,
    Delete_Product,
    Update_Product } from "../Actions/actionTypes.js"

let productReducer = ( state = productState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case Get_All_Products:
            console.log(action.payload);
            stateCopy.products = action.payload.data.products;
            console.log(stateCopy);
            return stateCopy;

        case Set_Product_Name:
            stateCopy.product.productName = action.payload;
            return stateCopy

        case Set_Brand_Name:
            stateCopy.product.brandName = action.payload;
            return stateCopy

        case Set_Product_Image:
            stateCopy.product.image = action.payload;
            return stateCopy

        case Set_Product_Description:
            stateCopy.product.productDescription = action.payload;
            return stateCopy
            
        case Set_Product_Category:
            stateCopy.product.category = action.payload;
            return stateCopy
            
        case Set_Product_Sub_Category:
            stateCopy.product.subCategory = action.payload;
            return stateCopy

        case Set_Product_Sub_Sub_Category:
            stateCopy.product.subSubCategory = action.payload;
            return stateCopy

        case Add_Product:
            console.log(action.payload);
            stateCopy.products.push(action.payload.data.product);
            console.log(stateCopy)
            return stateCopy;

        case Edit_Product:
            let eIndex = action.payload;
            stateCopy.editIndex = action.payload;
            stateCopy.editProduct = true;
            stateCopy.product._id = stateCopy.products[eIndex]._id;
            stateCopy.product.productName = stateCopy.products[eIndex].productName;
            stateCopy.product.brandName = stateCopy.products[eIndex].brandName;
            stateCopy.product.image = stateCopy.products[eIndex].image;
            stateCopy.product.productDescription = stateCopy.products[eIndex].productDescription;
            stateCopy.product.category = stateCopy.products[eIndex].category;
            stateCopy.product.subCategory = stateCopy.products[eIndex].subCategory;
            stateCopy.product.subSubCategory = stateCopy.products[eIndex].subSubCategory;

            console.log(stateCopy);
            return stateCopy

        case Update_Product:
            console.log(action.payload);
            let uIndex = stateCopy.editIndex;
            let pArray = stateCopy.products;
            let uProduct = action.payload.data.updated;
            pArray[uIndex].productName = uProduct.productName;
            pArray[uIndex].brandName = uProduct.brandName;
            pArray[uIndex].image = uProduct.image;
            pArray[uIndex].productDescription = uProduct.productDescription;
            pArray[uIndex].category = uProduct.category;
            pArray[uIndex].subCategory = uProduct.subCategory;
            pArray[uIndex].subSubCategory = uProduct.subSubCategory;
            stateCopy.products = pArray;
            stateCopy.editProduct = false;
            console.log(stateCopy)
            return stateCopy

        case Delete_Product:
            let dIndex = action.payload.product.index;
            stateCopy.products.splice(1, dIndex);
            console.log(stateCopy)
            return stateCopy

        default:
            return stateCopy;
    }
}

export default productReducer;