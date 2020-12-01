import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import LogoImage from "../Assets/logo.png";
import { BiCaretDown, CgArrowRightO, CgArrowLeftO } from "react-icons/all";
import Footer from "./footer";
import TodoBox from "../Components/TodoBox/TodoBox";

import "../sass/todoApp.scss";

const TodoApp = ({ history }) => {
  const [changedDays, setChangedDays] = useState(0);

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
        <section className="arrow_left">
          <button onClick={() => setChangedDays((prev) => prev - 1)}>
            <CgArrowLeftO />
          </button>
        </section>

        <section className="todo_box">
          <TodoBox changedDays={changedDays} />
        </section>

        <section className="arrow_right">
          <button onClick={() => setChangedDays((prev) => prev + 1)}>
            <CgArrowRightO />
          </button>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
};

export default TodoApp;
