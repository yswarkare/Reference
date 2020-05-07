import reviewsState from "../States/reviewsState";
import { Get_User_Review, Post_User_Review, Update_User_Review, Delete_User_Review } from "../Actions/actionTypes";

let reviewsReducer = ( state = reviewsState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    return stateCopy;
}

export default reviewsReducer;