import todosActionTypes from "./todosActionTypes";

const initialState = {
  todos: [
    {
      date: "Sat Dec 26th 2020",
      todos: [
        { value: "brush a teeth", done: false },
        { value: "remake todo app", done: true },
      ],
    },
  ],
  fetchingTodos: false,
  error: false,
  dateDifference: 0,
  selectedDateTodos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todosActionTypes.ADD_OUTER_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case todosActionTypes.ADD_INNER_TODO:
      const TODOS_COPY_A = [...state.todos];
      const SELECTED_TODOS_A = TODOS_COPY_A.filter(
        (todos) => todos.date === action.payload.date
      );
      const SELECTED_TODOS_INDEX_A = TODOS_COPY_A.findIndex(
        (todos) => todos.date === action.payload.date
      );
      SELECTED_TODOS_A[0].todos = [...SELECTED_TODOS_A, action.payload];
      TODOS_COPY_A[SELECTED_TODOS_INDEX_A] = SELECTED_TODOS_A;
      return {
        ...state,
        todos: TODOS_COPY_A,
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
      };

    case todosActionTypes.DELETE_INNER_TODO:
      const UPDATED_TODOS = state.todos.filter(
        (todo) => todo.date !== action.payload.date
      );
      return {
        ...state,
        todos: UPDATED_TODOS,
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

    case todosActionTypes.FILTER_SELECTED_DATE_TODOS:
      return {
        ...state,
        selectedDateTodos: state.todos.filter(
          (todos) => todos.date === action.payload
        ),
      };

    default:
      return state;
  }
};

export default todosReducer;
