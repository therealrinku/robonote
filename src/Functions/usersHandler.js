import firebaseAuthService from "../firebase/firebaseAuth";

export const SignupUser = async (email, password) => {
  try {
    await firebaseAuthService.createUserWithEmailAndPassword(email, password);
  } catch (err) {
    throw err;
  }
};

export const LoginUser = async (email, password) => {
  try {
    await firebaseAuthService.signInWithEmailAndPassword(email, password);
  } catch (err) {
    throw err;
  }
};
