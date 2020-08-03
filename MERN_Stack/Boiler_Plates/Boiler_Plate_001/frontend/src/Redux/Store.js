import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./Reducers/UserReducer";
import usersReducer from "./Reducers/UsersReducer";

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;