import { FetchTodos, UpdateTodos } from "../../functions/Todos";
import todosActionTypes from "./todosActionTypes";
import Concat from "../../utilities/Concat";
import DoneUndone from "../../utilities/DoUndo";
import Pop from "../../utilities/Pop";

export const DELETE_TODO = (currentUser, todosDate, initialFullTodos, todoValue) => async (dispatch) => {
  try {
    const response = Pop(initialFullTodos, todosDate, todoValue);
    await UpdateTodos(currentUser, todosDate, response.updatedTodos);
    dispatch({
      type: todosActionTypes.DELETE_TODO,
      payload: response.updatedTodoList,
    });
  } catch (err) {
    dispatch({
      type: todosActionTypes.SOMETHING_WENT_WRONG,
      payload: err.message,
    });
  }
};

export const UPDATE_TODO = (currentUser, todosDate, initialFullTodos, todoValue) => async (dispatch) => {
  try {
    const response = DoneUndone(initialFullTodos, todosDate, todoValue);
    await UpdateTodos(currentUser, todosDate, response.updatedTodos);
    dispatch({
      type: todosActionTypes.UPDATE_TODO,
      payload: response.updatedTodoList,
    });
  } catch (err) {
    dispatch({
      type: todosActionTypes.SOMETHING_WENT_WRONG,
      payload: err.message,
    });
  }
};

export const FETCH_TODOS = (currentUser, todosDate) => async (dispatch) => {
  try {
    dispatch({ type: todosActionTypes.LOADING_TODOS });
    const todos = await FetchTodos(currentUser, todosDate);
    dispatch({
      type: todosActionTypes.FETCH_TODOS,
      payload: { todos: todos, date: todosDate },
    });
  } catch (err) {
    dispatch({
      type: todosActionTypes.SOMETHING_WENT_WRONG,
      payload: err.message,
    });
  }
};

export const ADD_TODO = (currentUser, todosDate, initialFullTodos, newTodo) => async (dispatch) => {
  try {
    const response = Concat(initialFullTodos, todosDate, newTodo);
    await UpdateTodos(currentUser, todosDate, response.updatedTodos);
    dispatch({
      type: todosActionTypes.ADD_TODO,
      payload: response.updatedTodoList,
    });
  } catch (err) {
    dispatch({
      type: todosActionTypes.SOMETHING_WENT_WRONG,
      payload: err.message,
    });
  }
};
