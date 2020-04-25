import reviewsState from "../States/reviewsState";

let reviewsReducer = ( state = reviewsState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    return stateCopy;
}

export default reviewsReducer;