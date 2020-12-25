import {
  ADD_INNER_TODO,
  ADD_OUTER_TODOS,
  DELETE_INNER_TODO,
  UPDATE_INNER_TODO,
} from "./todosActionTypes";

export const AddInnerTodo = (date, todo, dispatch) => {
  return (dispatch) => {
    dispatch({ type: ADD_INNER_TODO, payload: { date, todo } });
  };
};

export const AddOuterTodos = (date, dispatch) => {
  return (dispatch) => {
    dispatch({ type: ADD_OUTER_TODOS, payload: { date } });
  };
};

export const UpdateInnerTodo = (date, value, dispatch) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_INNER_TODO, payload: { date, value } });
  };
};

export const DeleteInnerTodo = (date, value, dispatch) => {
  return (dispatch) => {
    dispatch({ type: DELETE_INNER_TODO, payload: { date, value } });
  };
};
