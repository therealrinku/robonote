import db from "../firebase/db";

const initialTodos = {
  todos: [{ date: "", todos: ["cup", "dup", "sup"] }],
  fetchingError: false,
};

const todosReducer = async (state = { initialTodos }, action: any) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return db
        .collection(action.payload.currentUser)
        .doc(action.payload.date)
        .onSnapshot((doc: any) => {
          return {
            ...state,
            todos: state.initialTodos.todos.concat({
              date: action.payload.date,
              todos: doc.data()?.todos,
            }),
          };
        });

    case "ADD_TODOS":

    default:
      return state;
  }
};

export default todosReducer;
