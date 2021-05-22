import appStyles from "../styles/App.module.css";
import moment from "moment";
import TodoItem from "../components/TodoItem";
import { useState, useEffect } from "react";
import { db } from "../firebase/main";

export default function TodoBoard({ todosDate }) {
  //check if date is past
  const todayDate = moment(new Date());
  const dateDiff = moment(todosDate).diff(todayDate, "days");

  //todos
  const [todos, setTodos] = useState([]);

  //new todo form handler
  const [newTodo, setNewTodo] = useState("");

  //new todo submitter
  const AddNewTodo = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    db.collection("test")
      .doc(todosDate)
      .onSnapshot((doc) => {
        setTodos(doc.data()?.todos || []);
      });
  }, [todosDate]);

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
