import { api, Axios } from "./axiosDefaults";
import { Set_Sub_Sub_Category_Name, Add_Sub_Sub_Category_Name, Get_All_Sub_Sub_Categories, Update_Sub_Sub_Category_Name, Delete_Sub_Sub_Category, Edit_Sub_Sub_Category } from "./actionTypes";

export const setSubSubCategory =(subSubCategoryName) => {
    return {
        type: Set_Sub_Sub_Category_Name,
        payload: subSubCategoryName
    }
}

export const addSubSubCategory =(subSubCategory) => async (dispatch) => {
    await api.post(`/sub-sub-categories`, subSubCategory)
    dispatch({
        type: Add_Sub_Sub_Category_Name
    })
}

export const getAllSubSubCategories = (admin) => async (dispatch) => {
    let res = await Axios.get(`/sub-sub-categories`, admin)
    dispatch({
        type: Get_All_Sub_Sub_Categories,
        payload: res
    });
} 

export const editSubSubCategory = (index) => async (dispatch) => {
    dispatch({
        type: Edit_Sub_Sub_Category,
        payload: index
    })
}

export const updateSubSubCategoryName = (subSubCategory) => async (dispatch) => {
    let res = await api.patch("/sub-sub-categories/update-sub-sub-category-name", subSubCategory)
    dispatch({
        type: Update_Sub_Sub_Category_Name,
        payload: res
    })
}

export const deleteSubSubCategory = (subSubCategory) => async (dispatch) => {
    let res = await api.patch("/sub-sub-categories/delete-sub-sub-category", subSubCategory)
    dispatch({
        type: Delete_Sub_Sub_Category,
        payload: subSubCategory
    })
    return res
}