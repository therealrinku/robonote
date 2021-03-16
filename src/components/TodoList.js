import { Draggable } from "react-beautiful-dnd";

const TodoList = ({ todos, UpdateTodo, DeleteTodo }) => {
  return (
    <div className="todo--list">
      {todos.map((todo, i) => {
        return (
          <Draggable draggableId={todo.value} key={i} index={i}>
            {(provided) => (
              <li
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className={todo.done ? "done--todo draggable" : "draggable"}
                onClick={() => UpdateTodo(todo.value)}
                onDoubleClick={() => DeleteTodo(todo.value)}
              >
                {todo.value}
              </li>
            )}
          </Draggable>
        );
      })}
    </div>
  );
};

export default TodoList;
