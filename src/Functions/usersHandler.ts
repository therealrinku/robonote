import firebaseAuthService from "../firebase/firebaseAuth";

export const SignupUser = async (email: string, password: string) => {
  try {
    await firebaseAuthService.createUserWithEmailAndPassword(email, password);
  } catch (err) {
    throw err;
  }
};

export const LoginUser = async (email: string, password: string) => {
  try {
    await firebaseAuthService.signInWithEmailAndPassword(email, password);
  } catch (err) {
    throw err;
  }
};
