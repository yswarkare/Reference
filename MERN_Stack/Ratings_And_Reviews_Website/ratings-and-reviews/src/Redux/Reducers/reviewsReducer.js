import reviewsState from "../States/reviewsState";
import { Get_User_Review,
    Get_Product_Reviews,
    Edit_User_Review,
    Set_User_Review,
    Post_User_Review,
    Update_User_Review,
    Delete_User_Review } from "../Actions/actionTypes";

let reviewsReducer = ( state = reviewsState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    switch (action.type) {
        
        case Get_User_Review:
            console.log(action.payload);
            if (action.payload.data.success === true){
                if(action.payload.data.review[0] === undefined){
                    state.reviewExists = false;
                } else {
                    state.review = action.payload.data.review[0];
                    state.reviewExists = true;
                }
            } else {
                state.reviewExists = false;
            }
            console.log(state);
            return state;

        case Get_Product_Reviews:
            console.log(action.payload);
            state.productReviews = action.payload.data.reviews
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

        case Edit_User_Review:
            console.log(action.payload);
            state.editReview = true;
            console.log(state);
            return state;

        case Set_User_Review:
            console.log(action.payload);
            state.review.review = action.payload.review;
            state.review.product = action.payload.product;
            state.review.user = action.payload.user;
            state.review.date = new Date()
            console.log(state);
            return state;

        case Post_User_Review:
            console.log(action.payload);
            state.review = action.payload.data.review;
            state.editReview = false;
            state.reviewExists = true;
            console.log(state);
            return state;

        case Update_User_Review:
            console.log(action.payload);
            state.review = action.payload.data.review;
            state.editReview = false;
            console.log("Username => "+state.review.user.username);
            console.log(state);
            return state;

        case Delete_User_Review:
            console.log(action.payload);
            state.reviewExists = false;
            console.log(state);
            return state;

        default:
            return stateCopy;
    }
}

export default reviewsReducer;