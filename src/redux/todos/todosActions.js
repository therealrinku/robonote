import { FetchTodos } from "../../functions/Todos";
import todosActionTypes from "./todosActionTypes";

export const FETCH_TODOS = (currentUser, todosDate) => async (dispatch) => {
  try {
    const todos = await FetchTodos(currentUser, todosDate);
    dispatch({ type: todosActionTypes.FETCH_TODOS, payload: todos });
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
