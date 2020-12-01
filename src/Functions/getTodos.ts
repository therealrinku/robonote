import db from "../db/db";

const GetTodos = (username: string, date: string) => {
  return new Promise((resolve) => {
    db.collection(username)
      .doc(date)
      .onSnapshot((doc) => resolve(doc.data()?.todos ? doc.data()?.todos : []));
  });
};

export default GetTodos;
