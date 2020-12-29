const Concat = (initialTodoList, lookingDate, newTodo) => {
  const todoListCopy = [...initialTodoList];
  const indexToConcat = initialTodoList.findIndex(
    (i) => i.date === lookingDate
  );
  const updatedTodos = [
    ...initialTodoList[indexToConcat].todos,
    { value: newTodo, done: false },
  ];
  todoListCopy[indexToConcat].todos = updatedTodos;
  return todoListCopy;
};

export default Concat;
