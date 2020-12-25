import db from "../firebase/firebaseDB";

const DeleteTodo = (
  userEmail: string,
  date: string,
  initialTodos: [],
  deletingTodoIndex: number
) => {
  const updatedTodos = initialTodos.filter((_, i) => {
    return i !== deletingTodoIndex;
  });

  return new Promise((resolve) => {
    db.collection(userEmail || "dummy@dummy.com")
      .doc(date)
      .update({
        todos: updatedTodos,
      })
      .then(() => {
        console.log("deleted");
        resolve("done");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  });
};

export default DeleteTodo;
