import { useState } from "react";

const TodoList = ({ todos, UpdateTodo, DeleteTodo }) => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    const todosLength =
      document.querySelector(".todo--list").childElementCount || 0;
    console.log(todosLength);
  }

  const AddDraggingClass = (e) => {
    const draggingElement = e.target;
    draggingElement.classList.add("dragging");
  };

  const RemoveDraggingClass = (e) => {
    const draggingElement = e.target;
    draggingElement.classList.remove("dragging");
  };

  return (
    <div className="todo--list" onLoad={() => setLoaded(true)}>
      {todos.map((todo, i) => {
        return (
          <li
            key={i}
            className={todo.done ? "done--todo draggable" : "draggable"}
            onClick={() => UpdateTodo(todo.value)}
            onDoubleClick={() => DeleteTodo(todo.value)}
            draggable="true"
            onDragStart={AddDraggingClass}
            onDragEnd={RemoveDraggingClass}
          >
            {todo.value}
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
