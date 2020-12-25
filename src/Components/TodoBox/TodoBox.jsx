import React, { useState, useEffect } from "react";
import Wrapper from "../../Wrapper/Wrapper";
import "./TodoBox.scss";
import Moment from "react-moment";
import moment from "moment";
import GetTodos from "../../Functions/getTodos";
import AddTodos from "../../Functions/addTodos";

import { IoMdInformationCircleOutline } from "react-icons/all";
import DeleteTodo from "../../Functions/deleteTodo";
import UpdateTodos from "../../Functions/updateTodos";
import { Tooltip } from "@material-ui/core";

const TodoBox = ({ changedDays, currentUser }) => {
  let isMounted = true;
  const [todos, setTodos] = useState([]);
  const [todoIn, setTodoIn] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);

  const [lines, setLines] = useState(
    [...Array(12)].map((e) => ~~(Math.random() * 40))
  );

  const date = moment(new Date()).add({ days: changedDays });
  const todayDate = moment(new Date());

  const timeDifference = date.diff(todayDate, "days");
  const formatedDate = moment(date).format("ll");
  const todosToShow = todos.filter((todo) => todo.date === formatedDate);

  console.log(todosToShow);

  const getTodos = () => {
    if (todos.findIndex((todo) => todo.date === formatedDate) < 0) {
      GetTodos(currentUser, formatedDate).then((data) => {
        if (data) {
          setTodos((prev) => [
            ...prev,
            { date: formatedDate, todos: data.todos },
          ]);
        } else {
          setTodos((prev) => [...prev, { date: formatedDate, todos: [] }]);
        }
      });
      setLines(
        [...Array(todos.length < 12 ? 12 - todos.length : 1)].map(
          (e) => ~~(Math.random() * 40)
        )
      );
    }
  };

  useEffect(() => {
    if (isMounted) {
      setTodoIn("");
      getTodos();
    }

    return () => {
      isMounted = false;
    };
  }, [timeDifference]);

  const AddTodo = (e) => {
    e.preventDefault();

    if (todoIn.trim() !== "") {
      setTodoIn("");
      AddTodos(currentUser, formatedDate, todos, [
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

  const doUndoUpdate = (indexToUpdate, slicingNum) => {
    const todosCopy = [...todos];
    const selectedTodo = todos[indexToUpdate];
    selectedTodo.value = selectedTodo.value.slice(0, slicingNum);
    selectedTodo.done = !selectedTodo.done;
    todosCopy[indexToUpdate] = selectedTodo;
    UpdateTodos(currentUser, formatedDate, todosCopy).then((res) => {
      if (res === "done") {
        document.querySelector(".new_todo_input").focus();
      }
    });
  };

  const todoUpdateHandler = (e, i) => {
    const todoCopy = [...todos];
    const selectedTodo = todos[i];
    selectedTodo.value = e.target.value;
    todoCopy[i] = selectedTodo;
    setTodos(todoCopy);
  };

  const todosChangeHandler = (e, i) => {
    e.preventDefault();
    if (todos[i].value.slice(-2) === "/d") {
      DeleteTodo(currentUser, formatedDate, todos, i);
    } else if (todos[i].value.slice(-2) === "/c") {
      doUndoUpdate(i, -2);
    } else if (todos[i].value.slice(-3) === "/nc") {
      doUndoUpdate(i, -3);
    } else {
      UpdateTodos(currentUser, formatedDate, todos).then((res) => {
        if (res === "done") {
          document.querySelector(".new_todo_input").focus();
        }
      });
    }
  };

  return (
    <Wrapper className="todo__box">
      <div className="date">
        <h4 style={timeDifference < 0 ? { color: "rgba(0,0,0,0.2)" } : null}>
          <Moment format="dddd MMM D YYYY" withTitle>
            {date}
          </Moment>
        </h4>
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
        {todosToShow[0]?.todos.map((todo, i) => {
          return (
            <div key={i} className="todos_div">
              <form
                onSubmit={(e) => todosChangeHandler(e, i)}
                className="todo_form"
              >
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
                  onChange={(e) => todoUpdateHandler(e, i)}
                  className="todos_input"
                />
              </form>
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
          {lines.map((_, i) => {
            return <li key={i}></li>;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default TodoBox;
