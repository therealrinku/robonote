import db from "../firebase/db";

export const FetchTodos = async (currentUser, todosDate) => {
  try {
    const todos = await db
      .collection(currentUser)
      .doc(todosDate)
      .get()
      .then((doc) => {
        return doc.data()?.todos;
      });
    return todos || [];
  } catch (err) {
    throw new Error(err.message);
  }
};

export const UpdateTodos = async (currentUser, todosDate, updatedTodos) => {
  try {
    await db.collection(currentUser).doc(todosDate).set({
      todos: updatedTodos,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
