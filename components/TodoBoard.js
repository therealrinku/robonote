import appStyles from "../styles/App.module.css";
import moment from "moment";
import TodoItem from "../components/TodoItem";
import { useState } from "react";
import { db } from "../firebase/main";

export default function TodoBoard({ fullTodoList, todosDate, todos, setFullTodos }) {
  //check if date is past
  const todayDate = moment(new Date());
  const dateDiff = moment(todosDate).diff(todayDate, "days");

  //new todo form handler
  const [newTodo, setNewTodo] = useState("");

  //new todo submitter
  const AddNewTodo = (e) => {
    e.preventDefault();
    //new todo object
    const newTodoObject = { title: newTodo, completed: false, serial: todos.length + 1 };
    //index of board
    const indexOfBoard = fullTodoList.findIndex((e) => e.date === todosDate);
    //if todos exists in that date then append on it else create a brand new todo list
    if (indexOfBoard >= 0) {
      const fullTodoListCopy = [...fullTodoList];
      const boardTodos = [...(fullTodoList[indexOfBoard]?.todos || [])];
      fullTodoListCopy[indexOfBoard].todos = [...boardTodos, newTodoObject];
      setFullTodos(fullTodoListCopy);
    } else {
      setFullTodos((prev) => [...prev, { date: todosDate, todos: [newTodoObject] }]);
    }

    //updating in db
    db.collection("test")
      .doc(todosDate)
      .set({
        todos: [...todos, newTodoObject],
      });
    setNewTodo("");
  };

  return (
    <>
      {/* date */}
      <p style={dateDiff < 0 ? { color: "grey" } : null}>{todosDate}</p>

      {/* todo list*/}
      <div className={appStyles.todos}>
        {todos.map((todo, i) => {
          return <TodoItem key={i} todo={todo} date={todosDate} />;
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
