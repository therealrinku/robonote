import db from "../firebase/firebaseDB";

const GetTodos = (userEmail: string, date: string) => {
  alert("fetched todos");
  return new Promise((resolve) => {
    db.collection(userEmail || "dummy@dummy.com")
      .doc(date)
      .onSnapshot((doc) => {
        resolve(doc.data());
      });
  });
};

export default GetTodos;
