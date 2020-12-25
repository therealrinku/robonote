import { combineReducers } from "redux";
import todosReducer from "./todos/todosReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  todos: todosReducer,
});

export default rootReducer;
