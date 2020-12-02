import db from "../firebase/db";

const UpdateTodos = (userEmail: string, date: string, updatedTodos: []) => {
  return new Promise((resolve) => {
    db.collection(userEmail || "dummy@dummy.com")
      .doc(date)
      .set({
        todos: updatedTodos,
      })
      .then(() => {
        resolve("done");
      });
  });
};

export default UpdateTodos;
