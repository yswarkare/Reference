import commentState from "../States/commentState";
import { Get_User_Comments, Set_User_Comment, Post_User_Comment, Update_User_Comment } from "../Actions/Action_Types";

let commentReducer = ( state = commentState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case Get_User_Comments:
            console.log(action.payload);
            if (action.payload.data.rating ) {
                let rating = action.payload.data.rating;
                if (rating[0] !== undefined){
                    stateCopy.rating = rating[0];
                    stateCopy.rating.rating = rating[0].rating.$numberDecimal
                    stateCopy.userRatingExists = true
                } else {
                    stateCopy.rating.rating = 0
                    stateCopy.userRatingExists = false
                }
            } else {
                stateCopy.ratingErrors.rating.message = action.payload.data.message
                stateCopy.ratingErrors.rating.success = action.payload.data.success
                stateCopy.userRatingExists = false
            }
            console.log(stateCopy);
            return stateCopy;

        case Set_User_Comment:
            console.log(action.payload);
            stateCopy.rating.rating = action.payload.rating;
            stateCopy.rating.product = action.payload.product;
            stateCopy.rating.user = action.payload.user;
            console.log(stateCopy);
            return stateCopy

        case Post_User_Comment:
            console.log(action.payload);
            stateCopy.rating = action.payload.data.rating;
            stateCopy.rating.rating = action.payload.data.rating.rating.$numberDecimal;
            console.log(stateCopy);
            return stateCopy

        case Update_User_Comment:
            console.log(action.payload);
            stateCopy.rating = action.payload.data.rating;
            stateCopy.rating.rating = action.payload.data.rating.rating.$numberDecimal;
            console.log(stateCopy);
            return stateCopy

        default:
            return stateCopy;
    }
}

export default commentReducer;