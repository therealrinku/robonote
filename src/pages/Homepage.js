import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Arrows from "../components/Arrows";
import Footer from "../components/Footer";
import Nav2 from "../components/Nav2";
import TodoPage from "../components/TodoPage";
import * as userActions from "../redux/user/userActions";
import * as todosActions from "../redux/todos/todosActions";
import moment from "moment";
import { Redirect } from "react-router-dom";

const Homepage = ({
  CURRENTUSER,
  SIGNOUT,
  FULLTODOLIST,
  FETCH_TODOS,
  LOADING,
  ERROR,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
}) => {
  const [newTodo, setNewTodo] = useState("");
  const [datePlus, setDatePlus] = useState(0);
  const formatedDate = moment(
    moment(new Date()).add({ days: datePlus })
  ).format("ddd MMM Do YYYY");

  const createDate = (addNum) => {
    return moment(moment(new Date()).add({ days: addNum })).format(
      "ddd MMM Do YYYY"
    );
  };

  const dateArrays = [
    datePlus - 1,
    datePlus,
    datePlus + 1,
    datePlus + 2,
    datePlus + 3,
  ].map((e) => createDate(e));

  const todosObject = FULLTODOLIST.filter((data) => data.date === formatedDate);

  useEffect(() => {
    setNewTodo("");
    if (!todosObject[0]?.date) {
      FETCH_TODOS(CURRENTUSER, formatedDate);
    }
  }, [formatedDate]);

  const DeleteTodo = (todoValue) => {
    DELETE_TODO(CURRENTUSER, formatedDate, FULLTODOLIST, todoValue);
  };

  const UpdateTodo = (todoValue) => {
    UPDATE_TODO(CURRENTUSER, formatedDate, FULLTODOLIST, todoValue);
  };

  const AddNewTodo = (e) => {
    e.preventDefault();
    if (
      newTodo.trim() !== "" &&
      todosObject[0]?.todos.findIndex((todo) => todo.value === newTodo) < 0
    ) {
      ADD_TODO(CURRENTUSER, formatedDate, FULLTODOLIST, newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="homepage">
      <Nav2 currentUser={CURRENTUSER} SIGNOUT={SIGNOUT} />

      <div className="daily--todo-list">
        {dateArrays.map((e) => {
          return (
            <TodoPage
              key={new Date() * Math.random()}
              loading={LOADING}
              todos={todosObject[0]?.todos || []}
              formatedDate={e}
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              datePlus={datePlus}
              AddTodo={AddNewTodo}
              UpdateTodo={UpdateTodo}
              DeleteTodo={DeleteTodo}
            />
          );
        })}
      </div>

      <Arrows setDatePlus={setDatePlus} />
      {!CURRENTUSER ? <Redirect to="/" /> : null}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ERROR: state.todos.error,
    LOADING: state.todos.loading,
    FULLTODOLIST: state.todos.todos,
    CURRENTUSER: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    DELETE_TODO: (user, date, fulltodolist, todovalue) =>
      dispatch(todosActions.DELETE_TODO(user, date, fulltodolist, todovalue)),
    UPDATE_TODO: (user, date, fulltodolist, todovalue) =>
      dispatch(todosActions.UPDATE_TODO(user, date, fulltodolist, todovalue)),
    ADD_TODO: (user, date, fulltodolist, newtodo) =>
      dispatch(todosActions.ADD_TODO(user, date, fulltodolist, newtodo)),
    FETCH_TODOS: (currentUser, date) =>
      dispatch(todosActions.FETCH_TODOS(currentUser, date)),
    SIGNOUT: () => dispatch(userActions.SIGNOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
