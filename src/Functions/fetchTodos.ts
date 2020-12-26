import db from "../firebase/firebaseDB";

const FetchTodos = (currentUser: string, date: string) => {
  try {
    return new Promise((resolve) => {
      db.collection(currentUser || "dummy@dummy.com")
        .doc(date)
        .onSnapshot((doc) => {
          resolve(doc.data());
        });
    });
  } catch (err) {
    throw err;
  }
};

export default FetchTodos;
