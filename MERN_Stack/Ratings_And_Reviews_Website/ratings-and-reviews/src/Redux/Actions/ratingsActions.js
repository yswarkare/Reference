import { Get_Rating, Set_Rating, Post_Rating, Update_Rating } from "./actionTypes";
import { api, Axios } from "./axiosDefaults";

export const getRating = () => async (dispatch) => {
    let res = api.get("/ratings/get-rating")
    dispatch({
        type: Get_Rating,
        payload: res
    })
}

export const setRating = (rating) => async (dispatch) => {
    dispatch({
        type: Set_Rating,
        payload: rating
    })
}

export const postRating = (rating) => async (dispatch) => {
    let res = api.post("/ratings/post-rating", rating)
    dispatch({
        type: Post_Rating,
        payload: res
    })
}

export const updateRating = () => async (dispatch) => {
    let res = api.patch("/ratings/get-rating")
    dispatch({
        type: Update_Rating,
        payload: res
    })
}