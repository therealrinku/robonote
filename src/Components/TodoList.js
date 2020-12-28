import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div className="todo--list">
      {todos.map((todo, i) => {
        return (
          <li key={i} className={todo.done ? "done--todo" : null}>
            {todo.value}
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
