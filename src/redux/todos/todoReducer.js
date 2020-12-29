import todosActionTypes from "./todosActionTypes";
import todoActionTypes from "./todosActionTypes";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.LOADING_TODOS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case todoActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload],
      };

    case todoActionTypes.ADD_TODO:
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
