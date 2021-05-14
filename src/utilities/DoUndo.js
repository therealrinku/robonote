const DoneUndone = (initialTodoList, lookingDate, todoValue) => {
  const todoListCopy = [...initialTodoList];
  const indexToUpdate = initialTodoList.findIndex((i) => i.date === lookingDate);
  const selectedDateDataCopy = todoListCopy[indexToUpdate];
  const selectedDateTodosCopy = [...selectedDateDataCopy.todos];
  const selectedTodoIndex = selectedDateTodosCopy.findIndex((todo) => todo.value === todoValue);
  selectedDateTodosCopy[selectedTodoIndex].done = !selectedDateTodosCopy[selectedTodoIndex].done;

  todoListCopy[indexToUpdate] = {
    date: lookingDate,
    todos: selectedDateTodosCopy,
  };
  return { updatedTodoList: todoListCopy, updatedTodos: selectedDateTodosCopy };
};

export default DoneUndone;
