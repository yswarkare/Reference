import { Set_Category_Name, Add_Category_Name, Get_All_Categories, Update_Category_Name, Delete_Category} from "./actionTypes";
import { api, Axios } from "./axiosDefaults";

export const setCategory =(categoryName) => {
    return {
        type: Set_Category_Name,
        payload: categoryName
    }
}

export const addCategory = (category) => async (dispatch) => {
    await api.post(`/categories`, category)
    dispatch({
        type: Add_Category_Name
    })
}

export const getAllCategories = (admin) => async (dispatch) => {
    let res = await Axios.get(`/categories`, admin)
    dispatch({
        type: Get_All_Categories,
        payload: res
    });
};

export const updateCategoryName = (category) => async (dispatch) => {
    let res = await api.patch("/categories/update-category-name", category);
    dispatch({
        type: Update_Category_Name,
        payload: category
    })
    return res
}

export const deleteCategory = (category) => async (dispatch) => {
    let res = await api.patch("/categories/delete-category", category);
    dispatch({
        type: Delete_Category,
        payload: category
    })
    return res
}