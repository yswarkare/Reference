import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer_01 from "./Reducers/Reducer_01";
import reducer_02 from "./Reducers/Reducer_02";
import reducer_03 from "./Reducers/Reducer_03";

const rootReducers = combineReducers({
    state_01: reducer_01,
    state_02: reducer_02,
    state_03: reducer_03,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;