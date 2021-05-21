import appStyles from "../styles/App.module.css";
import moment from "moment";
import TodoItem from "../components/TodoItem";
import { useState } from "react";

const TodoBoard = ({ todos, todosDate }) => {
  //check if date is past
  const todayDate = moment(new Date());
  const dateDiff = moment(todosDate).diff(todayDate, "days");

  //new todo form handler
  const [newTodo, setNewTodo] = useState("");

  //new todo submitter
  const AddNewTodo = (e) => {
    e.preventDefault();
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
        {[...Array(14 - todos.length + 1)].map((line) => {
          return <li key={line}></li>;
        })}
      </div>
    </>
  );
};

export default TodoBoard;
