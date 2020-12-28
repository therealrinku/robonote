import React from "react";
import HelpTooltip from "./HelpTooltip";

const TodoPage = ({
  formatedDate,
  DeleteTodo,
  AddTodo,
  todos,
  newTodo,
  setNewTodo,
}) => {
  return (
    <main className="todo--page">
      <div>
        <h4>{formatedDate}</h4>
        <HelpTooltip />
      </div>

      <div>
        {todos.map((todo, i) => {
          return (
            <div key={i} className="todos_div">
              <li onDoubleClick={() => DeleteTodo(todo.value)}>{todo.value}</li>
            </div>
          );
        })}
        <form className="new_todo_form" onSubmit={AddTodo}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="new_todo_input"
          />
        </form>

        <li></li>
        <li></li>
      </div>
    </main>
  );
};

export default TodoPage;
