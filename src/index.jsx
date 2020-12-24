import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserReducer from "./Redux/user";
import TodosReducer from "./Redux/todos";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

const combinedReducer = combineReducers({
  todos: TodosReducer,
  user: UserReducer,
});

const store = createStore(combinedReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
