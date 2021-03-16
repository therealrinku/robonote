import React from "react";

const TodoAddForm = ({ AddTodo, newTodo, setNewTodo }) => {
  return (
    <form className="todo--add-form" onSubmit={AddTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
};

export default TodoAddForm;
