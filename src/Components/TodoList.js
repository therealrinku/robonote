const TodoList = ({ todos, UpdateTodo, DeleteTodo }) => {
  const AddDraggingClass = (e) => {
    const draggingElement = e.target;
    draggingElement.classList.add("dragging");
  };

  const RemoveDraggingClass = (e) => {
    const draggingElement = e.target;
    draggingElement.classList.remove("dragging");
  };

  return (
    <div className="todo--list">
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
