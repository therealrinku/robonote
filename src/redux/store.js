import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const LOGGER_MIDDLEWARE = (store) => {
  return (next) => {
    return (action) => {
      next(action);
      console.log(store.getState());
    };
  };
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, LOGGER_MIDDLEWARE)
);

export default store;
