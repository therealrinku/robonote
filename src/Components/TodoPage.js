import React from "react";
import TodoDate from "./TodoDate";
import TodoList from "./TodoList";
import TodoAddForm from "./TodoAddForm";
import DummyLines from "./DummyLines";
import Loader from "./Loader";

const TodoPage = ({
  formatedDate,
  UpdateTodo,
  DeleteTodo,
  AddTodo,
  todos,
  newTodo,
  setNewTodo,
  datePlus,
  loading,
}) => {
  return (
    <main className="todo--page">
      {loading ? <Loader /> : null}
      <TodoDate formatedDate={formatedDate} datePlus={datePlus} />
      <TodoList todos={todos} UpdateTodo={UpdateTodo} />
      <TodoAddForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        AddTodo={AddTodo}
      />
      <DummyLines todosLength={todos.length} />
    </main>
  );
};

export default TodoPage;
