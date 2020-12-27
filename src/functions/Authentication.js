import firebaseAuthService from "../firebase/authService";

export const SignupUser = async (email, password) => {
  try {
    await firebaseAuthService.createUserWithEmailAndPassword(email, password);
    return "success";
  } catch (err) {
    throw new Error(err.message);
  }
};

export const LoginUser = async (email, password) => {
  try {
    await firebaseAuthService.signInWithEmailAndPassword(email, password);
    return "success";
  } catch (err) {
    throw new Error(err.message);
  }
};
