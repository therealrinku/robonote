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
  FETCH_TODOS,
  loading,
}) => {
  const formatedDate = moment(
    moment(new Date()).add({ days: dateDifference })
  ).format("ddd MMM Do YYYY");

  const selectedTodos = todos.filter((todos) => todos.date === formatedDate);

  useEffect(() => {
    if (selectedTodos[0]?.date !== formatedDate) {
      FETCH_TODOS(currentUser, formatedDate);
    }
  }, [formatedDate]);

  console.log(selectedTodos);

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
        todos={selectedTodos[0]?.todos || []}
        loading={loading}
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
    todos: state.todos.todos,
    loading: state.todos.fetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SIGNOUT: () => dispatch(userActions.SIGNOUT()),
    DATE_INCREMENT: () => dispatch(todosActions.DATE__INCREMENT()),
    DATE_DECREMENT: () => dispatch(todosActions.DATE__DECREMENT()),
    FETCH_TODOS: (currentUser, date) =>
      dispatch(todosActions.ADD__OUTER__TODOS(currentUser, date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
