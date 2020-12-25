import { LoginUser, SignupUser } from "../../Functions/usersHandler";
import userActionTypes from "./userActionTypes";

export const LOGIN = (email, password) => async (dispatch) => {
  try {
    await LoginUser(email, password);
    dispatch({ type: userActionTypes.LOGIN, payload: email });
  } catch (err) {
    dispatch({ type: userActionTypes.LOGIN_FAILURE, payload: err.message });
  }
};

export const SIGNUP = (email, password) => async (dispatch) => {
  try {
    await SignupUser(email, password);
    dispatch({ type: userActionTypes.LOGIN, payload: email });
  } catch (err) {
    dispatch({ type: userActionTypes.LOGIN_FAILURE, payload: err.message });
  }
};

export const SIGNOUT = () => (dispatch) => {
  return dispatch({ type: userActionTypes.SIGNOUT });
};
