import userActionTypes from "./userActionTypes";

const initialUserState = {
  currentUser: "rinkunited2032@gmail.com",
  loading: false,
  error: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case userActionTypes.LOGGED_IN:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
