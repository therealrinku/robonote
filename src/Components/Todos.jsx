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
              <form className="todo_form">
                <input
                  type="text"
                  value={todo.value}
                  style={
                    todo.done
                      ? {
                          color: "rgba(0,0,0,0.6)",
                          textDecoration: "line-through",
                        }
                      : null
                  }
                  className="todos_input"
                />
              </form>
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
    </Wrapper>
  );
};

export default Todos;
