import React, { useEffect } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Footer from "./footer";
import Todos from "../Components/Todos";
import { connect } from "react-redux";
import * as userActions from "../redux/user/userActions";
import * as todosActions from "../redux/todos/todosActions";
import HomeNav from "../Components/HomeNav";
import Arrows from "../Components/Arrows";
import moment from "moment";

const Homepage = ({
  history,
  currentUser,
  SIGNOUT,
  todos,
  dateDifference,
  DATE_DECREMENT,
  DATE_INCREMENT,
  FILTER_SELECTED_DATE_TODOS,
}) => {
  const formatedDate = moment(
    moment(new Date()).add({ days: dateDifference })
  ).format("ddd MMM Do YYYY");

  useEffect(() => {
    FILTER_SELECTED_DATE_TODOS(formatedDate);
  }, [formatedDate]);

  return (
    <Wrapper>
      <HomeNav SIGNOUT={SIGNOUT} currentUser={currentUser} history={history} />
      <Arrows
        DATE_DECREMENTER={DATE_DECREMENT}
        DATE_INCREMENTER={DATE_INCREMENT}
      />
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
    dateDifference: state.todos.dateDifference,
    reduxDate: state.todos.currentDate,
    todos: state.todos.selectedDateTodos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SIGNOUT: () => dispatch(userActions.SIGNOUT()),
    DATE_INCREMENT: () => dispatch(todosActions.DATE__INCREMENT()),
    DATE_DECREMENT: () => dispatch(todosActions.DATE__DECREMENT()),
    FILTER_SELECTED_DATE_TODOS: (date) =>
      dispatch(todosActions.FILTER__SELECTED__DATE__TODOS(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
