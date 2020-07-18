import blogPostState from "../States/blogPostState";
import { Get_User_BlogPosts,
    Get_BlogPost_Comments,
    Edit_User_BlogPost,
    Set_BlogPost_Text,
    Make_BlogPost,
    Update_User_BlogPost,
    Delete_User_BlogPost } from "../Actions/Action_Types.js";

let blogPostReducer = ( state = blogPostState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    switch (action.type) {
        
        case Get_User_BlogPosts:
            console.log(action.payload);
            if (action.payload.data.success === true){
                if(action.payload.data.userBlogPosts[0] === undefined){
                    state.userBlogPostExists = false;
                } else {
                    state.userBlogPosts = action.payload.data.userBlogPosts;
                    let uBPosts = action.payload.data.userBlogPosts
                    for (let i = 0; i < uBPosts.length; i++){
                        let createdAt = new Date(uBPosts[i].createdAt);
                        let updatedAt = new Date(uBPosts[i].updatedAt);
                        uBPosts[i].createdAt = createdAt.toLocaleString()
                        uBPosts[i].updatedAt = updatedAt.toLocaleString()
                    }
                    state.userBlogPosts = uBPosts;
                    state.userBlogPostExists = true;
                }
            } else {
                state.userBlogPostExists = false;
            }
            console.log(state);
            return state;

        case Get_BlogPost_Comments:
            console.log(action.payload);
            let date = "";
            if (action.payload.data.reviews[0]){
                date = new Date(action.payload.data.reviews[0].updatedAt);
            }

            console.log( "date => " + date)
            console.log("To Locale String => " + date.toLocaleString())
            let pRArray = action.payload.data.reviews
            for ( let i = 0; i < pRArray.length; i++){
                // let date1 = new Date(action.payload.data.reviews[i].date);
                // let createdAt1 = new Date(action.payload.data.reviews[i].createdAt);
                // let updatedAt1 = new Date(action.payload.data.reviews[i].updatedAt);
                // pRArray[i].date = date1.toLocaleString()
                // pRArray[i].createdAt = createdAt1.toLocaleString()
                // pRArray[i].updatedAt = updatedAt1.toLocaleString()
            }
            state.productReviews = pRArray;
            if(state.productReviews[0] === undefined){
                let pReviews= {
                    review: "",
                    user: {username: ""},
                    date: ""
                }
                state.productReviews.push(pReviews)
            }
            console.log(state);
            return state;

        case Set_BlogPost_Text:
            console.log(action.payload);
            state.blogPost.blogPostText = action.payload.blogPostText;
            state.blogPost.user = action.payload.user
            console.log(state);
            return state;

        case Make_BlogPost:
            console.log(action.payload);
            if (action.payload.data.success === true){
                let newBlogPost = action.payload.data.blogPost;
                console.log(newBlogPost.createdAt)
                let createdAt2 = new Date(newBlogPost.createdAt);
                let updatedAt2 = new Date(newBlogPost.updatedAt);
                newBlogPost.createdAt = createdAt2.toLocaleString()
                newBlogPost.updatedAt = updatedAt2.toLocaleString()
                state.userBlogPosts.push(newBlogPost)
                state.userBlogPostExists = true;
                state.blogPost.blogPostText = ""
            }
            console.log(state);
            return state;

        case Edit_User_BlogPost:
            console.log(action.payload);
            state.editUserBlogPost = true;
            console.log(state);
            return state;

        case Update_User_BlogPost:
            console.log(action.payload);
            if (action.payload.data.success === true) {
                let uBPost4 = action.payload.data.blogPost;
                let createdAt3 = new Date(uBPost4.createdAt);
                let updatedAt3 = new Date(uBPost4.updatedAt);
                uBPost4.createdAt = createdAt3.toLocaleString()
                uBPost4.updatedAt = updatedAt3.toLocaleString()
                state.userBlogPosts[action.index] = uBPost4;
                state.editUserBlogPost = false;
            }
            console.log(state);
            return state;

        case Delete_User_BlogPost:
            console.log(action.payload);
            if (action.payload.data.success === true) {
                let uBPosts5 = state.userBlogPosts;
                uBPosts5.splice(action.index, 1);
                state.userBlogPosts = uBPosts5
            }

            console.log(state);
            return state;

        default:
            return stateCopy;
    }
}

export default blogPostReducer;