import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import HelpTooltip from "./HelpTooltip";

const Todos = ({ todos, formatedDate }) => {
  const [todoIn, setTodoIn] = useState("");

  return (
    <Wrapper className="todos_page">
      <div className="date">
        <h4>{formatedDate}</h4>
        <HelpTooltip />
      </div>

      <div className="todos">
        {todos.map((todo, i) => {
          return (
            <div key={i} className="todos_div">
              <li>{todo.value}</li>
            </div>
          );
        })}

        <form className="new_todo_form">
          <input
            type="text"
            value={todoIn}
            onChange={(e) => setTodoIn(e.target.value)}
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
