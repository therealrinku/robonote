import db from "../firebase/db";

const GetTodos = (
  userEmail: string,
  date: string,
  setFunction: (data: []) => {}
) => {
  alert("fetched todos");
  return db
    .collection(userEmail || "dummy@dummy.com")
    .doc(date)
    .onSnapshot((doc) => {
      setFunction(doc.data()?.todos ? doc.data()?.todos : []);
    });
};

export default GetTodos;
