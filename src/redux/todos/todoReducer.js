import todosActionTypes from "./todosActionTypes";
import todoActionTypes from "./todosActionTypes";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action) {
    case todoActionTypes.LOADING_TODOS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case todoActionTypes.ADD_TODO:
    case todoActionTypes.FETCH_TODOS:
    case todoActionTypes.DELETE_TODO:
      return {
        ...state,
        loading: false,
        error: null,
        todos: action.payload,
      };

    case todosActionTypes.SOMETHING_WENT_WRONG:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
