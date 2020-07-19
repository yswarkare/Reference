import state_01 from "../States/State_01";
import { First_Action_Type } from "../Actions/Action_Types";

let reducer_01 = ( state = state_01, action ) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    
    switch (action.type) {
        
        case First_Action_Type:

        return state;

        default:
            return stateCopy;
    }
}

export default reducer_01;