import { Set_BlogPost_Text, Make_BlogPost } from "./Action_Types";
import { api, Axios } from "./axiosDefaults";

export const setPostText = (blogPost) => async (dispatch) => {
    dispatch ({
        type: Set_BlogPost_Text,
        payload: blogPost
    })
}

export const makeBlogPost = (blogPost) => async (dispatch) => {
    let res = await api.post("/make-blog-post", blogPost);
    dispatch({
        type: Make_BlogPost,
        payload: res
    })
}