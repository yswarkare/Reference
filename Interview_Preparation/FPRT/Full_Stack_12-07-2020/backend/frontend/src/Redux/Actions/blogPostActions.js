import { Set_BlogPost_Text, Make_BlogPost, Get_User_BlogPosts } from "./Action_Types";
import { api, Axios } from "./axiosDefaults";


export const setPostText = (blogPost) => async (dispatch) => {
    dispatch ({
        type: Set_BlogPost_Text,
        payload: blogPost
    })
}

export const makeBlogPost = (blogPost) => async (dispatch) => {
    let res = await api.post("/blog-posts/make-blog-post", blogPost);
    dispatch({
        type: Make_BlogPost,
        payload: res
    })
}

export const getUserBlogPosts = () => async (dispatch) => {
    let res = await api.get("/blog-posts/get-user-blog-posts");
    dispatch({
        type: Get_User_BlogPosts,
        payload: res
    })
}

export const editUserBlogPost = () => async (dispatch) => {
    
}

export const updateUserBlogPost = () => async (dispatch) => {
    
}

export const deleteBlogPost = () => async (dispatch) => {
    
}

export const sendUserBlogPostId = () => async (dispatch) => {
    
}

export const getUserBlogPost = () => async (dispatch) => {

}
