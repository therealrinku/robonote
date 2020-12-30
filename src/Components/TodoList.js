import React from "react";

const TodoList = ({ todos, UpdateTodo }) => {
  return (
    <div className="todo--list">
      {todos.map((todo, i) => {
        return (
          <li
            key={i}
            className={todo.done ? "done--todo" : null}
            onClick={() => UpdateTodo(todo.value)}
          >
            {todo.value}
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
