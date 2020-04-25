import ratingsState from "../States/ratingsState";

let ratingsReducer = ( state = ratingsState, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    return stateCopy;
}

export default ratingsReducer;