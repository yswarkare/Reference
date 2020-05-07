import ratingsState from "../States/ratingsState";
import { Get_Rating, Set_Rating, Post_Rating, Update_Rating } from "../Actions/actionTypes";

let ratingsReducer = ( state = ratingsState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    return stateCopy;
}

export default ratingsReducer;