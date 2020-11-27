import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import LogoImage from "../Assets/logo.png";
import { BiCaretDown } from "react-icons/all";
import Footer from "./footer";

import "../sass/todoApp.scss";

const TodoApp = ({ history }) => {
  const [todosVal, setTodosVal] = useState(["testing"]);

  const todoValHandler = (e, i) => {
    const todosValCopy = [...todosVal];
    todosValCopy[i] = e.target.value;
    setTodosVal(todosValCopy);
  };

  return (
    <Wrapper className="todo_app">
      <header>
        <nav>
          <section>
            <button className="logo" onClick={() => history.push("/app")}>
              <img src={LogoImage} alt="logo" />
              <p>haveTodo</p>
            </button>
          </section>

          <section>
            <button>
              <p>arcy2032</p>
              <BiCaretDown />
            </button>
          </section>
        </nav>
      </header>

      <main>
        <section className="todo_box">
          <div className="date">
            <h4>FRIDAY</h4>
            <p>27 Nov 2020</p>
          </div>

          <div className="todos">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e, i) => {
              return (
                <div key={e}>
                  {(todosVal[i - 1] !== "" && todosVal[i] === "") || i === 0 ? (
                    <input
                      type="text"
                      value={todosVal[i]}
                      onChange={(e) => todoValHandler(e, i)}
                    />
                  ) : (
                    <li>{i}</li>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
};

export default TodoApp;
