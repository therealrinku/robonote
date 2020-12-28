import React from "react";
import TodoDate from "./TodoDate";
import TodoList from "./TodoList";
import TodoAddForm from "./TodoAddForm";

const TodoPage = ({
  formatedDate,
  DeleteTodo,
  AddTodo,
  todos,
  newTodo,
  setNewTodo,
  datePlus,
}) => {
  return (
    <main className="todo--page">
      <TodoDate formatedDate={formatedDate} datePlus={datePlus} />
      <TodoList todos={todos} />
      <TodoAddForm newTodo={newTodo} setNewTodo={setNewTodo} />
    </main>
  );
};

export default TodoPage;
