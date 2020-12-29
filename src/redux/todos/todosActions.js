import { FetchTodos } from "../../functions/Todos";
import todosActionTypes from "./todosActionTypes";

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

/*export const ADD_TODO=(currentUser,todosDate,initialFullTodos)=>async(dispatch)=>{
    try{

    }
    catch(err){
        dispatch({
            type: todosActionTypes.SOMETHING_WENT_WRONG,
            payload: err.message,
          });
    }
}*/
