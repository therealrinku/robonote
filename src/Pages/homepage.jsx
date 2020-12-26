import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Footer from "./footer";
import Todos from "../Components/Todos";
import { connect } from "react-redux";
import * as userActions from "../redux/user/userActions";
import HomeNav from "../Components/HomeNav";
import Arrows from "../Components/Arrows";
import moment from "moment";

const Homepage = ({ history, currentUser, SIGNOUT, todos }) => {
  const [changedDays, setChangedDays] = useState(0);
  const formatedDate = moment(
    moment(new Date()).add({ days: changedDays })
  ).format("ddd MMM Do YYYY");

  return (
    <Wrapper>
      <HomeNav SIGNOUT={SIGNOUT} currentUser={currentUser} history={history} />
      <Arrows setChangedDays={setChangedDays} />
      <Todos
        formatedDate={formatedDate}
        currentUser={currentUser}
        todos={todos[0]?.todos || []}
      />
      <Footer />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    todos: state.todos.todos.filter((todo) => todo.date === "Dec 26, 2020"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SIGNOUT: () => dispatch(userActions.SIGNOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
