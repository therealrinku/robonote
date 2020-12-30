const Pop = (initialTodoList, lookingDate, todoValue) => {
  const todoListCopy = [...initialTodoList];
  const indexToUpdate = initialTodoList.findIndex(
    (i) => i.date === lookingDate
  );
  const selectedDateDataCopy = todoListCopy[indexToUpdate];
  const selectedDateTodosCopy = [...selectedDateDataCopy.todos];
  const updatedTodosCopy = selectedDateTodosCopy.filter(
    (todo) => todo.value !== todoValue
  );

  console.log(selectedDateTodosCopy);

  todoListCopy[indexToUpdate] = {
    date: lookingDate,
    todos: updatedTodosCopy,
  };
  return { updatedTodoList: todoListCopy, updatedTodos: updatedTodosCopy };
};

export default Pop;
