import appStyles from "../styles/App.module.css";
import moment from "moment";
import TodoItem from "../components/TodoItem";
import { useState } from "react";
import { db } from "../firebase/main";

export default function TodoBoard({ fullTodoList, todosDate, todos, setFullTodos }) {
  //check if date is past
  console.log(todos);
  const todayDate = moment(new Date());
  const dateDiff = moment(todosDate).diff(todayDate, "days");

  //new todo form handler
  const [newTodo, setNewTodo] = useState("");

  //action performer to reuse same code
  const actionPerformer = (actionType, indexOfTodo) => {
    const indexOfBoard = fullTodoList.findIndex((e) => e.date === todosDate);
    const fullTodoListCopy = [...fullTodoList];
    const boardTodos = [...(fullTodoList[indexOfBoard]?.todos || [])];

    //new todo
    const newTodoObject = { title: newTodo, completed: false, serial: todos.length + 1 };

    //for final data
    let finalUpdatedTodoList = [];

    switch (actionType) {
      case "createnew":
        finalUpdatedTodoList = [...todos, newTodoObject];
        if (indexOfBoard >= 0) {
          fullTodoListCopy[indexOfBoard].todos = [...boardTodos, newTodoObject];
          setFullTodos(fullTodoListCopy);
        } else {
          setFullTodos((prev) => [...prev, { date: todosDate, todos: [newTodoObject] }]);
        }
        break;

      case "doundo":
        boardTodos[indexOfTodo].completed = !boardTodos[indexOfTodo].completed;
        fullTodoListCopy[indexOfBoard].todos = boardTodos;
        setFullTodos(fullTodoListCopy);
        finalUpdatedTodoList = boardTodos;

        break;

      case "delete":
        const filteredTodos = boardTodos.filter((_, i) => i !== indexOfTodo);
        fullTodoListCopy[indexOfBoard].todos = filteredTodos;
        setFullTodos(fullTodoListCopy);
        finalUpdatedTodoList = filteredTodos;

        break;
    }

    //update in db
    db.collection("test").doc(todosDate).set({ todos: finalUpdatedTodoList });
  };

  const AddNewTodo = (e) => {
    e.preventDefault();
    actionPerformer("createnew");
    setNewTodo("");
  };

  return (
    <>
      {/* date */}
      <p style={dateDiff < 0 ? { color: "grey" } : null}>{todosDate}</p>

      {/* todo list*/}
      <div className={appStyles.todos}>
        {todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              index={i}
              todo={todo}
              date={todosDate}
              doUndo={(indexOfTodo) => actionPerformer("doundo", indexOfTodo)}
              deleteTodo={(indexOfTodo) => actionPerformer("delete", indexOfTodo)}
            />
          );
        })}
      </div>

      {/*new todo input*/}
      <form onSubmit={AddNewTodo}>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      </form>

      {/*dummy lines*/}
      <div>
        {[...Array(14 - todos.length + 1)].map((line, i) => {
          return <li key={i}></li>;
        })}
      </div>
    </>
  );
}
