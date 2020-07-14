import { Set_BlogPost_Text,
    Make_BlogPost,
    Get_User_BlogPosts,
    Edit_User_BlogPost,
    Update_User_BlogPost,    
    Delete_User_BlogPost } from "./Action_Types";
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

export const editUserBlogPost = (blogPost, index) => async (dispatch) => {
    dispatch({
        type: Edit_User_BlogPost,
        payload: blogPost,
        index: index
    })
}

export const updateUserBlogPost = (blogPost, index) => async (dispatch) => {
    dispatch({
        type: Update_User_BlogPost,
        payload: blogPost,
        index: index
    })
}

export const deleteUserBlogPost = (blogPost, index) => async (dispatch) => {
    dispatch({
        type: Delete_User_BlogPost,
        payload: blogPost,
        index: index
    })
}

export const sendUserBlogPostId = () => async (dispatch) => {
    
}

export const getUserBlogPost = () => async (dispatch) => {

}
