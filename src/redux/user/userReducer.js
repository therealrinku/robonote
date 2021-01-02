import userActionTypes from "./userActionTypes";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN_WITH_EMAIL:
      return {
        ...state,
        currentUser: action.payload,
        error: false,
        loading: false,
      };

    case userActionTypes.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case userActionTypes.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false,
      };

    case userActionTypes.SOMETHING_WENT_WRONG:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case userActionTypes.SIGNOUT:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
