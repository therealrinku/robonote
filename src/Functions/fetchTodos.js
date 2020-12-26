import db from "../firebase/firebaseDB";

const FetchTodos = async (currentUser, date) => {
  try {
    const todos=await db.collection(currentUser).doc(date).get(doc=>{
      return doc.data()?.todos||[]
    })
    return todos;
  } catch (err) {
    throw new Error("Something went wrong!");
  }
};

export default FetchTodos;
