import { Set_BlogPost_Text, Make_BlogPost, Get_User_BlogPosts } from "./Action_Types";
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

export const getUserBlogPost = () => async (dispatch) => {

}

export const getUserBlogPosts = () => async (dispatch) => {
    let res = await api.get("get-user-blog-posts");
    dispatch({
        type: Get_User_BlogPosts,
        payload: res
    })
}

export const sendUserBlogPostId = () => async (dispatch) => {
    
}