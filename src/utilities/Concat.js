const Concat = (initialTodoList, lookingDate, newTodo) => {
  console.log(initialTodoList, lookingDate, newTodo);

  const todoListCopy = [...initialTodoList];
  const indexToConcat = initialTodoList.findIndex(
    (i) => i.date === lookingDate
  );
  const updatedTodos = [
    ...initialTodoList[indexToConcat].todos,
    { value: newTodo, done: false },
  ];
  todoListCopy[indexToConcat].todos = updatedTodos;
  return { updatedTodoList: todoListCopy, updatedTodos: updatedTodos };
};

export default Concat;
