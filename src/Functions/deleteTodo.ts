import db from "../firebase/db";

const DeleteTodo = (
  userEmail: string,
  date: string,
  initialTodos: [],
  deletingTodoIndex: number
) => {
  const updatedTodos = initialTodos
    .slice(0, deletingTodoIndex)
    .concat(initialTodos.splice(deletingTodoIndex, 1));

  return new Promise((resolve) => {
    db.collection(userEmail || "dummy@dummy.com")
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
