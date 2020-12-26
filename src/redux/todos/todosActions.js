import todosActionTypes from "./todosActionTypes";
import AddTodo from "../../Functions/addTodo";
import FetchTodos from "../../Functions/fetchTodos";
import DeleteTodo from "../../Functions/deleteTodo";

export const ADD__INNER__TODO = (
  currentUser,
  initialTodos,
  date,
  todo
) => async (dispatch) => {
  try {
    dispatch({
      type: todosActionTypes.ADD_INNER_TODO,
      payload: { date, todo },
    });
    await AddTodo(currentUser, date, initialTodos, [
      { done: false, value: todo },
    ]);
  } catch (err) {
    dispatch({
      type: todosActionTypes.ERROR_FOUND,
      payload: "Something went wrong while saving todo.",
    });
  }
};

export const ADD__OUTER__TODOS = (currentUser, date) => async (dispatch) => {
  try {
    dispatch({ type: todosActionTypes.FETCHING_TODOS });
    const todos = await FetchTodos(currentUser, date);
    console.log(todos);

    dispatch({
      type: todosActionTypes.ADD_OUTER_TODOS,
      payload: { todos, date },
    });
  } catch (err) {
    dispatch({
      type: todosActionTypes.ERROR_FOUND,
      payload: "Something went wrong while fetching todos.",
    });
  }
};

export const UPDATE__INNER__TODO = (date, value, dispatch) => {
  return (dispatch) => {
    dispatch({
      type: todosActionTypes.UPDATE_INNER_TODO,
      payload: { date, value },
    });
  };
};

export const DELETE__INNER__TODO = (
  currentUser,
  initialTodos,
  date,
  todo
) => async (dispatch) => {
  try {
    dispatch({
      type: todosActionTypes.DELETE_INNER_TODO,
      payload: { date, todo },
    });
    await DeleteTodo(currentUser, date, initialTodos, todo);
  } catch (err) {
    dispatch({
      type: todosActionTypes.ERROR_FOUND,
      payload: "Something went wrong while deleting todo.",
    });
  }
};

export const DATE__INCREMENT = () => (dispatch) => {
  return dispatch({ type: todosActionTypes.DATE_INCREMENT });
};

export const DATE__DECREMENT = () => (dispatch) => {
  return dispatch({ type: todosActionTypes.DATE_DECREMENT });
};
