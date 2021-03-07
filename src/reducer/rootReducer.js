import { combineReducers } from "redux";
import { commentReducer } from "./postReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

export default rootReducer;
