import db from "../firebase/firebaseDB";

const FetchTodos = async (currentUser, date) => {
  try {
    const todos = await db
      .collection(currentUser)
      .doc(date)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data()?.todos || [];
        } else {
          return [];
        }
      });
    return todos;
  } catch (err) {
    throw new Error("Something went wrong!");
  }
};

export default FetchTodos;
