import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";

import { IoMdInformationCircleOutline } from "react-icons/all";
import { Tooltip } from "@material-ui/core";

const Todos = ({ todos, formatedDate }) => {
  const [todoIn, setTodoIn] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);

  return (
    <Wrapper className="todos_page">
      <div className="date">
        <h4>{formatedDate}</h4>
        <Tooltip
          open={showToolTip}
          onOpen={() => setShowToolTip(true)}
          onClose={() => setShowToolTip(false)}
          leaveTouchDelay={5000}
          title={
            <div style={{ fontSize: "18px" }}>
              Quick tips
              <p>1.Press enter to save</p>
              <p>2.enter /d at the end of todo to delete </p>
              <p>3.enter /c at the end of todo to toggle done status of todo</p>
            </div>
          }
          arrow
        >
          <button onClick={() => setShowToolTip((prev) => !prev)}>
            <IoMdInformationCircleOutline />
          </button>
        </Tooltip>
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
