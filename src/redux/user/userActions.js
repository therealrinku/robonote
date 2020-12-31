import { LoginUser, SignupUser } from "../../functions/Authentication";
import todosActionTypes from "../todos/todosActionTypes";
import userActionTypes from "./userActionTypes";

export const SIGNUP = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userActionTypes.LOADING });
    await SignupUser(email, password);
    dispatch({ type: userActionTypes.LOGIN, payload: email });
  } catch (err) {
    dispatch({
      type: userActionTypes.SOMETHING_WENT_WRONG,
      payload: err.message,
    });
  }
};

export const LOGIN = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userActionTypes.LOADING });
    await LoginUser(email, password);
    dispatch({ type: userActionTypes.LOGIN, payload: email });
  } catch (err) {
    dispatch({
      type: userActionTypes.SOMETHING_WENT_WRONG,
      payload: err.message,
    });
  }
};

export const SIGNOUT = () => (dispatch) => {
  dispatch({ type: userActionTypes.SIGNOUT });
  dispatch({ type: todosActionTypes.CLEAR_TODO_LIST });
};
