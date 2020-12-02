import db from "../firebase/db";

const GetTodos = (userEmail: string, date: string) => {
  return new Promise((resolve) => {
    db.collection(userEmail || "dummy@dummy.com")
      .doc(date)
      .onSnapshot((doc) => resolve(doc.data()?.todos ? doc.data()?.todos : []));
  });
};

export default GetTodos;
