import React, { useState, useContext } from "react";
import Wrapper from "../Wrapper/Wrapper";
import LogoImage from "../Assets/logo.png";
import {
  BiCaretDown,
  CgArrowRightO,
  CgArrowLeftO,
  RiLogoutCircleRLine,
} from "react-icons/all";
import Footer from "./footer";
import TodoBox from "../Components/TodoBox/TodoBox";
import Context from "../context";
import { Redirect } from "react-router-dom";

import "../sass/todoApp.scss";

const TodoApp = ({ history }) => {
  const [changedDays, setChangedDays] = useState(0);
  const { currentUserEmail } = useContext(Context);
  const [showLogout, setShowLogout] = useState(false);

  const redirectLine = currentUserEmail === "" ? <Redirect to="/" /> : null;

  const Logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    history.push("/");
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
            <button onClick={() => setShowLogout((prev) => !prev)}>
              <p>{currentUserEmail.slice(0, currentUserEmail.indexOf("@"))}</p>
              <BiCaretDown />
            </button>

            <div
              className="logout_dropdown"
              style={!showLogout ? { display: "none" } : null}
            >
              <button onClick={Logout}>
                <RiLogoutCircleRLine />
                <p>Logout</p>
              </button>
            </div>
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

      {redirectLine}
    </Wrapper>
  );
};

export default TodoApp;
