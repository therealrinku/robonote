import firebaseAuth from "../firebase/auth";

const initialUserState = {
  currentUser: null,
  loginError: false,
  signupError: false,
};

const userReducer = async (state = { initialUserState }, action: any) => {
  switch (action.type) {
    case "LOGIN":
      const loginResponse = await firebaseAuth.signInWithEmailAndPassword(
        action.payload.email,
        action.payload.password
      );
      return loginResponse
        ? {
            ...state,
            currentUser: action.payload.email,
          }
        : {
            ...state,
            loginError: true,
          };

    case "SIGNUP":
      const signupResponse = await firebaseAuth.createUserWithEmailAndPassword(
        action.payload.email,
        action.payload.password
      );
      return signupResponse
        ? {
            ...state,
            currentUser: action.payload.email,
          }
        : {
            ...state,
            signupError: true,
          };

    case "SIGNOUT":
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
