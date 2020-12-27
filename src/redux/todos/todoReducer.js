import todoActionTypes from "./todosActionTypes";

const initialState = {
  todos: [],
  loading: false,
  error: false,
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
    case todoActionTypes.SET_TODO:
    case todoActionTypes.DELETE_TODO:
      return {
        ...state,
        loading: false,
        error: false,
        todos: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
