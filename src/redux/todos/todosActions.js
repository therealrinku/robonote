import todosActionTypes from "./todosActionTypes";

export const FILTER__SELECTED__DATE__TODOS = (date) => (dispatch) => {
  return dispatch({
    type: todosActionTypes.FILTER_SELECTED_DATE_TODOS,
    payload: date,
  });
};

export const ADD__INNER__TODO = (date, todo, dispatch) => {
  return (dispatch) => {
    dispatch({
      type: todosActionTypes.ADD_INNER_TODO,
      payload: { date, todo },
    });
  };
};

export const ADD__OUTER__TODOS = (date, dispatch) => {
  return (dispatch) => {
    dispatch({ type: todosActionTypes.ADD_OUTER_TODOS, payload: { date } });
  };
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
