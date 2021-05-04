import TodoDate from "./TodoDate";
import TodoList from "./TodoList";
import TodoAddForm from "./TodoAddForm";
import DummyLines from "./DummyLines";
import Loader from "./Loader";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";

const TodoPage = ({
  formatedDate,
  datePlus,
  loading,
  error,
  allTodos,
  currentUser,
  deleteTodo,
  updateTodo,
  fetchTodos,
  addTodo,
}) => {
  const [newTodo, setNewTodo] = useState("");
  const todosObject = allTodos.filter((data) => data.date === formatedDate);

  useEffect(() => {
    setNewTodo("");
    if (!todosObject[0]?.date) {
      fetchTodos(currentUser, formatedDate);
    }
  }, []);

  const DeleteTodo = (todoValue) => {
    deleteTodo(currentUser, formatedDate, allTodos, todoValue);
  };

  const UpdateTodo = (todoValue) => {
    updateTodo(currentUser, formatedDate, allTodos, todoValue);
  };

  const AddNewTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "" && todosObject[0]?.todos.findIndex((todo) => todo.value === newTodo) < 0) {
      addTodo(currentUser, formatedDate, allTodos, newTodo);
      setNewTodo("");
    }
  };

  return (
    <Droppable droppableId={formatedDate}>
      {(provided, snapshot) => (
        <main
          className="todo--page container"
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={snapshot.isDraggingOver ? { background: "lightgreen" } : null}
        >
          {loading ? <Loader /> : null}
          <TodoDate formatedDate={formatedDate} datePlus={datePlus} />
          <TodoList todos={todosObject[0]?.todos || []} UpdateTodo={UpdateTodo} DeleteTodo={DeleteTodo} />
          {todosObject[0]?.todos.length === 12 ? null : (
            <TodoAddForm newTodo={newTodo} setNewTodo={setNewTodo} AddTodo={AddNewTodo} />
          )}
          <DummyLines todosLength={todosObject[0]?.todos.length || 0} />
          {provided.placeholder}
        </main>
      )}
    </Droppable>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.todos.error,
    loading: state.todos.loading,
    allTodos: state.todos.todos,
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(TodoPage);
