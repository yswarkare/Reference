import { 
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
    Update_Product } from "./actionTypes"
import { api } from "./axiosDefaults"

export const setProductName = (productName) => {
    return ({
        type: Set_Product_Name,
        payload: productName
    })
}

export const setBrandName = (brandName) => {
    return ({
        type: Set_Brand_Name,
        payload: brandName
    })
}

export const setProductImage = (image) => {
    return ({
        type: Set_Product_Image,
        payload: image
    })
}

export const setProductDescription = (productDescription) => {
    return ({
        type: Set_Product_Description,
        payload: productDescription
    })
}

export const setProductCategory = (category) => {
    return ({
        type: Set_Product_Category,
        payload: category
    })
}

export const setProductSubCategory = (subCategory) => {
    return ({
        type: Set_Product_Sub_Category,
        payload: subCategory
    })
}

export const setProductSubSubCategory = (subSubCategory) => {
    return ({
        type: Set_Product_Sub_Sub_Category,
        payload: subSubCategory
    })
}

export const addProduct = (product) => async (dispatch) => {
    await api.post("/products", product)
    return await dispatch({
        type: Add_Product
    });
}

export const editProduct = (index) => (dispatch) => {
    dispatch({
        type: Edit_Product,
        payload: index
    });
}

export const updateProduct = (product) => async (dispatch) => {
    let res = await api.patch("/products/update-product", product);
    dispatch({
        type: Update_Product,
        payload: product
    });
    return res;
}

export const deleteProduct = (product) => async (dispatch) => {
    let res = await api.delete("/products/delete-product", product)
    dispatch({
        type: Delete_Product,
        payload: product
    });
    return res;
}