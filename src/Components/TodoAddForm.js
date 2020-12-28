import React from "react";

const TodoAddForm = ({ newTodo, setNewTodo }) => {
  return (
    <form className="todo--add-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
};

export default TodoAddForm;
