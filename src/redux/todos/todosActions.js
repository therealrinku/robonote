import { FetchTodos, UpdateTodos } from "../../functions/Todos";
import todosActionTypes from "./todosActionTypes";
import Concat from "../../utilities/Concat";

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

export const ADD_TODO = (
  currentUser,
  todosDate,
  initialFullTodos,
  newTodo
) => async (dispatch) => {
  try {
    const updatedTodoList = Concat(initialFullTodos, todosDate, newTodo);
    const updatedTodosForThatDate = updatedTodoList.filter(
      (e) => e.date === todosDate
    );
    await UpdateTodos(
      currentUser,
      todosDate,
      updatedTodosForThatDate[0]?.todos
    );
    dispatch({ type: todosActionTypes.ADD_TODO, payload: updatedTodoList });
  } catch (err) {
    dispatch({
      type: todosActionTypes.SOMETHING_WENT_WRONG,
      payload: err.message,
    });
  }
};
