import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./Reducers/userReducer";
import blogPostReducer from "./Reducers/blogPostReducer";
import commentReducer from "./Reducers/commentReducer";

const rootReducers = combineReducers({
    users: userReducer,
    blogPosts: blogPostReducer,
    comments: commentReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;