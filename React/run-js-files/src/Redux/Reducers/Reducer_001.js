import state_001 from "../State/state_001"
import { Rob_Houses } from "../Actions/ActionTypes";

let reducer_001 = (state = state_001, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case Rob_Houses:
            console.log(action.payload);
            console.log(stateCopy);
            return stateCopy

        default:
            return stateCopy
    }

}

export default reducer_001;