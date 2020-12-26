import todosActionTypes from "./todosActionTypes";

const initialState = {
  todos: [],
  fetching: false,
  error: null,
  dateDifference: 0,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todosActionTypes.ERROR_FOUND: {
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    }

    case todosActionTypes.FETCHING_TODOS: {
      return {
        ...state,
        fetching: true,
      };
    }

    case todosActionTypes.ADD_OUTER_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        fetching: false,
        error: false,
      };

    case todosActionTypes.ADD_INNER_TODO:
      const todosCopyA = [...state.todos];
      const selectedTodoListCopyIndexA = todosCopyA.findIndex(
        (todos) => todos.date === action.payload.date
      );
      const selectedTodoListCopyA = todosCopyA.filter(
        (todos) => todos.date === action.payload.date
      );
      selectedTodoListCopyA[0].todos = [
        ...selectedTodoListCopyA[0].todos,
        { value: action.payload.todo, done: false },
      ];
      todosCopyA[selectedTodoListCopyIndexA] = selectedTodoListCopyA[0];

      return {
        ...state,
        todos: todosCopyA,
        fetching: false,
        error: false,
      };

    case todosActionTypes.UPDATE_INNER_TODO:
      const TODOS_COPY_B = [...state.todos];
      const SELECTED_TODOS_B = TODOS_COPY_B.filter(
        (todos) => todos.date === action.payload.date
      );
      const SELECTED_TODOS_INDEX_B = TODOS_COPY_B.findIndex(
        (todos) => todos.date === action.payload.date
      );

      SELECTED_TODOS_B[0].todos = [...SELECTED_TODOS_B, action.payload];
      TODOS_COPY_B[SELECTED_TODOS_INDEX_B] = SELECTED_TODOS_B;
      return {
        ...state,
        todos: TODOS_COPY_B,
        fetching: false,
        error: false,
      };

    case todosActionTypes.DELETE_INNER_TODO:
      const todosCopyC = [...state.todos];
      const selectedTodoListCopyIndexC = todosCopyC.findIndex(
        (todos) => todos.date === action.payload.date
      );
      const selectedTodoListCopyC = todosCopyC.filter(
        (todos) => todos.date === action.payload.date
      );
      selectedTodoListCopyC[0].todos.filter((todo) => {
        return todo.value !== action.payload.todo;
      });
      todosCopyC[selectedTodoListCopyIndexC] = selectedTodoListCopyC[0];
      return {
        ...state,
        todos: todosCopyC,
        fetching: false,
        error: false,
      };

    case todosActionTypes.DATE_INCREMENT:
      return {
        ...state,
        dateDifference: state.dateDifference + 1,
      };

    case todosActionTypes.DATE_DECREMENT:
      return {
        ...state,
        dateDifference: state.dateDifference - 1,
      };

    default:
      return state;
  }
};

export default todosReducer;
