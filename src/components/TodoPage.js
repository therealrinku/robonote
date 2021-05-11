import Loader from "./Loader";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import moment from "moment";
import { VscClose } from "react-icons/all";

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

  //for showing hiding delete btn on mouse enter and leave
  const [showDeleteButtonId, setShowDeleteButtonId] = useState(false);

  useEffect(() => {
    setNewTodo("");
    if (!todosObject[0]?.date) {
      fetchTodos(currentUser, formatedDate);
    }
  }, []);

  //to check if date is before today
  const TodayDate = moment(new Date());
  const dateDiff = moment(formatedDate).diff(TodayDate, "days");

  //checking todos length
  const todosLength = todosObject[0]?.todos.length || 0;

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

          {/*todos date*/}
          <div className="todo--date">
            <p style={dateDiff < 0 ? { color: "grey" } : null}>{formatedDate}</p>
          </div>

          {/*todos list*/}
          <div className="todo--list">
            {todosObject[0]?.todos.map((todo, i) => {
              return (
                <Draggable draggableId={todo.value} key={i} index={i}>
                  {(provided) => (
                    <div
                      className="flex"
                      onMouseEnter={() => setShowDeleteButtonId(i)}
                      onMouseLeave={() => setShowDeleteButtonId(null)}
                    >
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={todo.done ? "done--todo draggable" : "draggable"}
                        onClick={() => UpdateTodo(todo.value)}
                      >
                        {todo.value}
                      </li>

                      <button
                        id="mobile-delete-btn"
                        style={showDeleteButtonId !== i ? { display: "none" } : null}
                        className="delete-btn"
                        onClick={() => DeleteTodo(todo.value)}
                      >
                        <VscClose />
                      </button>
                    </div>
                  )}
                </Draggable>
              );
            })}
          </div>

          {/*new todo form*/}
          {todosObject[0]?.todos.length === 12 ? null : (
            <form className="todo--add-form" onSubmit={AddNewTodo}>
              <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            </form>
          )}

          {/*extra dummy lines*/}
          <div className="dummy--lines">
            {[...Array(todosLength <= 11 ? 12 - todosLength + 1 : 1)].map((_, i) => {
              return <li key={i}></li>;
            })}
          </div>
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
