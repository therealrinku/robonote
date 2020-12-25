import db from "../firebase/firebaseDB";

const AddTodos = (
  userEmail: string,
  date: string,
  initialTodos: [],
  addedTodos: []
) => {
  const updatedTodos = [...initialTodos, ...addedTodos];
  return new Promise((resolve) => {
    db.collection(userEmail || "dummy@dummy.com")
      .doc(date)
      .set({ todos: updatedTodos })
      .then(() => {
        resolve("done");
      });
  });
};

export default AddTodos;
