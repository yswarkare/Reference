import state_02 from "../States/State_02";
import { } from "../Actions";

let reducer_02 = ( state = state_02, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    switch (action.type) {
        
        

        default:
            return stateCopy;
    }
}

export default reducer_02;