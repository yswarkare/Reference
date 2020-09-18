import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./Reducers/UserReducer";
import usersReducer from "./Reducers/UsersReducer";
import conversationReducer from "./Reducers/ConversationReducer";

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    conversations: conversationReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;