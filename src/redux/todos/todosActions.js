import FetchTodos from "../../Functions/fetchTodos";
import todosActionTypes from "./todosActionTypes";

export const ADD__INNER__TODO = (date, todo, dispatch) => {
  return (dispatch) => {
    dispatch({
      type: todosActionTypes.ADD_INNER_TODO,
      payload: { date, todo },
    });
  };
};

export const ADD__OUTER__TODOS = (currentUser, date) => async (dispatch) => {
  try {
    dispatch({ type: todosActionTypes.FETCHING_TODOS });
    const response = await FetchTodos(currentUser, date);

    dispatch({
      type: todosActionTypes.ADD_OUTER_TODOS,
      payload: { todos: response?.todos || [], date: date },
    });
  } catch (err) {
    dispatch({
      type: todosActionTypes.ERROR_FETCHING,
      payload: "Something went wrong",
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

export const DELETE__INNER__TODO = (date, value, dispatch) => {
  return (dispatch) => {
    dispatch({
      type: todosActionTypes.DELETE_INNER_TODO,
      payload: { date, value },
    });
  };
};

export const DATE__INCREMENT = () => (dispatch) => {
  return dispatch({ type: todosActionTypes.DATE_INCREMENT });
};

export const DATE__DECREMENT = () => (dispatch) => {
  return dispatch({ type: todosActionTypes.DATE_DECREMENT });
};
