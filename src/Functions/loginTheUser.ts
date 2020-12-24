import firebaseAuth from "../firebase/auth";

const LoginTheUser = async (email: string, password: string) => {
  const response = await firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      alert(err.message + "  hahahah");
    });
  console.log(response);
};

export default LoginTheUser;
