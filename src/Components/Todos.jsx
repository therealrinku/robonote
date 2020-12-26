import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import HelpTooltip from "./HelpTooltip";
import ProgressBar from "./ProgressBar";

const Todos = ({
  todos,
  formatedDate,
  loading,
  AddTodo,
  newTodo,
  setNewTodo,
  DeleteTodo,
}) => {
  return (
    <Wrapper className="todos_page">
      {loading ? <ProgressBar /> : null}
      <div className="date">
        <h4>{formatedDate}</h4>
        <HelpTooltip />
      </div>

      <div className="todos">
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
      </div>

      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </Wrapper>
  );
};

export default Todos;
