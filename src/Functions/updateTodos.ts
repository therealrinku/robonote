import db from "../db/db";

const UpdateTodos = (username: string, date: string, updatedTodos: []) => {
  return new Promise((resolve) => {
    db.collection(username)
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
