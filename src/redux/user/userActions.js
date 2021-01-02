import { LoginUser, SignupUser } from "../../functions/Authentication";
import todosActionTypes from "../todos/todosActionTypes";
import userActionTypes from "./userActionTypes";

const saveEmailToLocalStorage = (email) => {
  localStorage.setItem("email", email);
};

const removeEmailFromLocalStorage = () => {
  localStorage.removeItem("email");
};

export const LOGIN_WITH_EMAIL = (email) => async (dispatch) => {
  try {
    dispatch({ type: userActionTypes.LOGIN_WITH_EMAIL, payload: email });
  } catch (err) {
    dispatch({
      type: userActionTypes.SOMETHING_WENT_WRONG,
      payload: err.message,
    });
  }
};

export const SIGNUP = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userActionTypes.LOADING });
    await SignupUser(email, password);
    saveEmailToLocalStorage(email);
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
    saveEmailToLocalStorage(email);
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
  removeEmailFromLocalStorage();
};
