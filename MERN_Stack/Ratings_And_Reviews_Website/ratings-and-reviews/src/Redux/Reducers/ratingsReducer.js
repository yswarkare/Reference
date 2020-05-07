import ratingsState from "../States/ratingsState";
import { Get_User_Rating, Set_User_Rating, Post_User_Rating, Update_User_Rating } from "../Actions/actionTypes";

let ratingsReducer = ( state = ratingsState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case Get_User_Rating:
            console.log(action.payload);
            if (action.payload.data.rating) {
                let rating = action.payload.data.rating;
                stateCopy.rating = rating[0];
            } else {
                stateCopy.ratingErrors.rating.message = action.payload.data.message
                stateCopy.ratingErrors.rating.success = action.payload.data.success
            }
            console.log(stateCopy);
            return stateCopy;

        case Set_User_Rating:
            console.log(action.payload);
            stateCopy.rating.rating = action.payload;
            console.log(stateCopy);
            return stateCopy

        case Post_User_Rating:
            console.log(action.payload);
            stateCopy.rating = action.payload.data.rating;
            console.log(stateCopy);
            return stateCopy

        case Update_User_Rating:
            console.log(action.payload);
            stateCopy.rating = action.payload.data.rating;
            console.log(stateCopy);
            return stateCopy

        default:
            return stateCopy;
    }
}

export default ratingsReducer;