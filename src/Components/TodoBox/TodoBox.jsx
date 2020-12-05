import React, { useState, useEffect, useContext } from "react";
import Wrapper from "../../Wrapper/Wrapper";
import "./TodoBox.scss";
import Moment from "react-moment";
import moment from "moment";
import GetTodos from "../../Functions/getTodos";
import AddTodos from "../../Functions/addTodos";

import { MdClose } from "react-icons/all";
import DeleteTodo from "../../Functions/deleteTodo";
import UpdateTodos from "../../Functions/updateTodos";
import Context from "../../context";

const TodoBox = ({ changedDays }) => {
  const [todos, setTodos] = useState([{ done: false, value: "" }]);
  const [todoIn, setTodoIn] = useState("");
  const [shownDeleteBtnIndex, setShownDeleteBtnIndex] = useState("");
  const { currentUserEmail } = useContext(Context);

  const [lines, setLines] = useState(
    [...Array(12)].map((e) => ~~(Math.random() * 40))
  );

  const date = moment(new Date()).add({ days: changedDays });
  const todayDate = moment(new Date());

  const timeDifference = date.diff(todayDate, "days");
  const formatedDate = moment(date).format("ll");

  const getTodos = () => {
    GetTodos(currentUserEmail, formatedDate, setTodos);
    setLines(
      [...Array(todos.length < 12 ? 12 - todos.length : 1)].map(
        (e) => ~~(Math.random() * 40)
      )
    );
  };

  useEffect(() => {
    setTodoIn("");
    getTodos();
  }, [timeDifference]);

  const AddTodo = (e) => {
    e.preventDefault();

    if (todoIn.trim() !== "") {
      setTodoIn("");
      AddTodos(currentUserEmail, formatedDate, todos, [
        { done: false, value: todoIn },
      ]).then((res) => {
        if (res !== "done") {
          alert("Failed to save todo.");
        }
      });
    } else {
      alert("Todo cannot be empty");
    }
  };

  const todoUpdateHandler = (e, i) => {
    const todoCopy = [...todos];
    const selectedTodo = todos[i];
    selectedTodo.value = e.target.value;
    todoCopy[i] = selectedTodo;
    setTodos(todoCopy);
  };

  return (
    <Wrapper className="todo__box">
      <div className="date">
        <h4 style={timeDifference < 0 ? { color: "rgba(0,0,0,0.2)" } : null}>
          <Moment format="dddd MMM D YYYY" withTitle>
            {date}
          </Moment>
        </h4>
      </div>

      <div className="todos">
        {todos.map((todo, i) => {
          return (
            <div
              key={i}
              className="todos_div"
              onMouseEnter={() => setShownDeleteBtnIndex(i)}
              onMouseLeave={() => setShownDeleteBtnIndex("")}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  UpdateTodos(currentUserEmail, formatedDate, todos).then(
                    (res) => {
                      document.querySelector(".new_todo_input").focus();
                    }
                  );
                }}
              >
                <input
                  type="text"
                  value={todo.value}
                  className={todo.done ? "done_todo" : ""}
                  onChange={(e) => todoUpdateHandler(e, i)}
                  onDoubleClick={() => alert("double cllicked")}
                  className="todos_input"
                />
              </form>
              <button
                type="button"
                onClick={() =>
                  DeleteTodo(currentUserEmail, formatedDate, todos, i).then(
                    (res) => {
                      if (res !== "done") {
                        alert(res);
                      }
                    }
                  )
                }
              >
                <MdClose />
              </button>
            </div>
          );
        })}

        <form className="new_todo_form" onSubmit={AddTodo}>
          <input
            type="text"
            value={todoIn}
            onChange={(e) => setTodoIn(e.target.value)}
            className="new_todo_input"
          />
        </form>

        <div className="lines">
          {lines.map((line, i) => {
            return <li key={i}></li>;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default TodoBox;
