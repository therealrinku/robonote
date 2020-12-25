import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { CgArrowRightO, CgArrowLeftO } from "react-icons/all";
import Footer from "./footer";
import TodoBox from "../Components/TodoBox";

import "../sass/todoApp.scss";
import { connect } from "react-redux";
import * as userActions from "../redux/user/userActions";
import HomeNav from "../Components/HomeNav";

const Homepage = ({ history, currentUser, SIGNOUT, todos }) => {
  const [changedDays, setChangedDays] = useState(0);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper className="todo_app">
      <HomeNav SIGNOUT={SIGNOUT} currentUser={currentUser} history={history} />
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
    todos: state.todos.todos.filter((todo) => todo.date === "Dec 25, 2020"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SIGNOUT: () => dispatch(userActions.SIGNOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
