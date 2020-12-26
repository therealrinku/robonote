import db from "../firebase/firebaseDB";

const DeleteTodo = (currentUser, date, initialTodos, todoToDelete) => {
  const updatedTodos = initialTodos.filter(
    (todo) => todo.value !== todoToDelete
  );
  return new Promise((resolve) => {
    db.collection(currentUser || "dummy@dummy.com")
      .doc(date)
      .set({ todos: updatedTodos })
      .then(() => {
        resolve("done");
      });
  });
};

export default DeleteTodo;
