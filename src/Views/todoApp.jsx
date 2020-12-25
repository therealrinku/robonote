import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import LogoImage from "../Assets/logo.png";
import {
  BiCaretDown,
  CgArrowRightO,
  CgArrowLeftO,
  RiLogoutCircleRLine,
} from "react-icons/all";
import Footer from "./footer";
import TodoBox from "../Components/TodoBox";

import "../sass/todoApp.scss";
import { connect } from "react-redux";
import * as userActions from "../redux/user/userActions";

const TodoApp = ({ history, currentUser, SIGNOUT }) => {
  const [changedDays, setChangedDays] = useState(0);
  const [showLogout, setShowLogout] = useState(false);

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
              <p>{currentUser.slice(0, currentUser.indexOf("@"))}</p>
              <BiCaretDown />
            </button>

            <div
              className="logout_dropdown"
              style={!showLogout ? { display: "none" } : null}
            >
              <button onClick={SIGNOUT}>
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
          <TodoBox changedDays={changedDays} currentUser={currentUser} />
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    todos: state.todos.todos.filter((todo) => todo.date === "boom"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SIGNOUT: () => dispatch(userActions.SIGNOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
