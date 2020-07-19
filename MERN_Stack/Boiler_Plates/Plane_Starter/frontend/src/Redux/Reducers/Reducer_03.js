import state_03 from "../States/State_03";
import { } from "../Actions";

let reducer_03 = ( state = state_03, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    switch (action.type) {
        


        default:
            return stateCopy;
    }
}

export default reducer_03;