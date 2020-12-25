import firebaseAuthService from "../firebase/firebaseAuth";

export const SignupUser = (email: string, password: string) => {
  return new Promise((resolve) => {
    firebaseAuthService
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        resolve("success");
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  });
};

export const LoginUser = (email: string, password: string) => {
  return new Promise((resolve) => {
    firebaseAuthService
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        resolve("success");
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  });
};
