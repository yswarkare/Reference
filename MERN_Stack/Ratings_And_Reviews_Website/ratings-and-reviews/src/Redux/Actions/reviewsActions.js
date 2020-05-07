import { api, Axios } from "./axiosDefaults";
import { Get_User_Review, Post_User_Review, Update_User_Review, Delete_User_Review } from "./actionTypes";

export const getUserReview = (review) => async (dispatch) => {
    let res = await api.patch("/reviews/get-user-review", review)
    dispatch({
        type: Get_User_Review,
        payload: res
    })
}