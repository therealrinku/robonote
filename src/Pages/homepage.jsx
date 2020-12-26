import React, { useEffect, useState, useMemo } from "react";
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
  ADD_TODO,
  DELETE_TODO,
}) => {
  const formatedDate = moment(
    moment(new Date()).add({ days: dateDifference })
  ).format("ddd MMM Do YYYY");

  const selectedTodos = todos.filter((todos) => todos.date === formatedDate);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (selectedTodos[0]?.date !== formatedDate) {
      FETCH_TODOS(currentUser, formatedDate);
    }
  }, [formatedDate]);

  const AddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      if (
        selectedTodos[0]?.todos.findIndex((todo) => todo.value === newTodo) >= 0
      ) {
        alert(`${newTodo} already exists`);
      } else {
        ADD_TODO(
          currentUser,
          selectedTodos[0]?.todos || [],
          formatedDate,
          newTodo
        );
      }
    }
    setNewTodo("");
  };

  const DeleteTodo = (value) => {
    DELETE_TODO(
      currentUser,
      selectedTodos[0]?.todos || [],
      formatedDate,
      value
    );
  };

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
        AddTodo={AddTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        DeleteTodo={DeleteTodo}
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
    ADD_TODO: (currentUser, selectedTodos, date, todo) =>
      dispatch(
        todosActions.ADD__INNER__TODO(currentUser, selectedTodos, date, todo)
      ),
    DELETE_TODO: (currentUser, selectedTodos, date, todo) =>
      dispatch(
        todosActions.DELETE__INNER__TODO(currentUser, selectedTodos, date, todo)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
