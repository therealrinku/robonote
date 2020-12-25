import userActionTypes from "./userActionTypes";

const initialUserState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case userActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case userActionTypes.SIGNOUT:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
