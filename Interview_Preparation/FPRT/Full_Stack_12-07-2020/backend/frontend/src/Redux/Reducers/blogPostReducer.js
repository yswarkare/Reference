import blogPostState from "../States/blogPostState";
import { Get_User_BlogPost,
    Get_BlogPost_Comments,
    Edit_User_BlogPost,
    Set_BlogPost_Text,
    Make_BlogPost,
    Update_User_BlogPost,
    Delete_User_BlogPost } from "../Actions/Action_Types.js";

let blogPostReducer = ( state = blogPostState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    switch (action.type) {
        
        case Get_User_BlogPost:
            console.log(action.payload);
            if (action.payload.data.success === true){
                if(action.payload.data.review[0] === undefined){
                    state.reviewExists = false;
                } else {
                    state.review = action.payload.data.review[0];
                    let date = new Date(action.payload.data.review[0].date);
                    let createdAt = new Date(action.payload.data.review[0].createdAt);
                    let updatedAt = new Date(action.payload.data.review[0].updatedAt);
                    state.review.date = date.toLocaleString()
                    state.review.createdAt = createdAt.toLocaleString()
                    state.review.updatedAt = updatedAt.toLocaleString()
                    state.reviewExists = true;
                }
            } else {
                state.reviewExists = false;
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
                let date1 = new Date(action.payload.data.reviews[i].date);
                let createdAt1 = new Date(action.payload.data.reviews[i].createdAt);
                let updatedAt1 = new Date(action.payload.data.reviews[i].updatedAt);
                pRArray[i].date = date1.toLocaleString()
                pRArray[i].createdAt = createdAt1.toLocaleString()
                pRArray[i].updatedAt = updatedAt1.toLocaleString()
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

        case Edit_User_BlogPost:
            console.log(action.payload);
            state.editReview = true;
            console.log(state);
            return state;

        case Set_BlogPost_Text:
            console.log(action.payload);
            stateCopy.blogPost.blogPostText = action.payload.blogPostText;
            stateCopy.blogPost.user = action.payload.user
            console.log(state);
            return state;

        case Make_BlogPost:
            console.log(action.payload);
            state.review = action.payload.data.review;
            let date2 = new Date(action.payload.data.review.date);
            let createdAt2 = new Date(action.payload.data.review.createdAt);
            let updatedAt2 = new Date(action.payload.data.review.updatedAt);
            state.review.date = date2.toLocaleString()
            state.review.createdAt = createdAt2.toLocaleString()
            state.review.updatedAt = updatedAt2.toLocaleString()
            state.editReview = false;
            state.reviewExists = true;
            console.log(state);
            return state;

        case Update_User_BlogPost:
            console.log(action.payload);
            state.review = action.payload.data.review;
            let date3 = new Date(action.payload.data.review.date);
            let createdAt3 = new Date(action.payload.data.review.createdAt);
            let updatedAt3 = new Date(action.payload.data.review.updatedAt);
            state.review.date = date3.toLocaleString()
            state.review.createdAt = createdAt3.toLocaleString()
            state.review.updatedAt = updatedAt3.toLocaleString()
            state.editReview = false;
            console.log("Username => "+state.review.user.username);
            console.log(state);
            return state;

        case Delete_User_BlogPost:
            console.log(action.payload);
            state.reviewExists = false;
            console.log(state);
            return state;

        default:
            return stateCopy;
    }
}

export default blogPostReducer;