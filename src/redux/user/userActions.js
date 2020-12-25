import userActionTypes from "./userActionTypes";

export const LOGIN = async (userEmail, dispatch) => {
  try {
    dispatch({ type: userActionTypes.LOGGED_IN, payload: userEmail });
  } catch (err) {
    dispatch({ type: userActionTypes.LOGIN_FAILURE, payload: err.message });
  }
};
