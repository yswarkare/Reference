import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer_001 from "./Reducers/Reducer_001";


const rootReducers = combineReducers({
    state_001: reducer_001
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;