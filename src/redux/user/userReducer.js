import userActionTypes from "./userActionTypes";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
    case userActionTypes.SIGNUP:
      return {
        ...state,
        currentUser: action.payload.email,
        error: false,
        loading: false,
      };

    case userActionTypes.SOMETHING_WENT_WRONG:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case userActionTypes.SIGNOUT:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default userReducer;
