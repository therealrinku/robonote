import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Footer from "./footer";
import TodoBox from "../Components/TodoBox";
import { connect } from "react-redux";
import * as userActions from "../redux/user/userActions";
import HomeNav from "../Components/HomeNav";
import Arrows from "../Components/Arrows";

const Homepage = ({ history, currentUser, SIGNOUT, todos }) => {
  const [changedDays, setChangedDays] = useState(0);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper className="todo_app">
      <HomeNav SIGNOUT={SIGNOUT} currentUser={currentUser} history={history} />
      <Arrows setChangedDays={setChangedDays} />
      <TodoBox changedDays={changedDays} currentUser={currentUser} />

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
