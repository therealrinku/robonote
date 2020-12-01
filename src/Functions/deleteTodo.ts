import db from "../db/db";

const DeleteTodo = (
  username: string,
  date: string,
  initialTodos: [],
  deletingTodoIndex: number
) => {
  const updatedTodos = initialTodos
    .slice(0, deletingTodoIndex)
    .concat(initialTodos.splice(deletingTodoIndex, 1));

  return new Promise((resolve) => {
    db.collection(username)
      .doc(date)
      .update({
        todos: updatedTodos,
      })
      .then(() => {
        resolve("done");
      })
      .catch((err) => {
        throw err;
      });
  });
};

export default DeleteTodo;
