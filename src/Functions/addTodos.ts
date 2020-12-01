import db from "../db/db";

const AddTodos = (
  username: string,
  date: string,
  initialTodos: [],
  addedTodos: []
) => {
  const updatedTodos = [...initialTodos, ...addedTodos];
  return new Promise((resolve) => {
    db.collection(username)
      .doc(date)
      .set({ todos: updatedTodos })
      .then(() => {
        resolve("done");
      });
  });
};

export default AddTodos;
