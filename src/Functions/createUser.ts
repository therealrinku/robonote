import firebaseAuth from "../firebase/auth";

const CreateUser = (email: string, password: string) => {
  return new Promise((resolve) => {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve("done");
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

export default CreateUser;
