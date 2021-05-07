import { useState } from "react";
import { connect } from "react-redux";
import TodoPage from "../components/TodoPage";
import moment from "moment";
import { Redirect } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import * as todosActions from "../redux/todos/todosActions";
import LeftToolbar from "../components/LeftToolbar";
import RightToolbar from "../components/RightToolbar";

const Homepage = ({ allTodos, currentUser, fetchTodos, addTodo, deleteTodo, updateTodo }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [datePlus, setDatePlus] = useState(0);

  const createDate = (addNum) => {
    return moment(currentDate).add({ days: addNum }).format("ddd MMM D YYYY");
  };

  const dateArrays = [datePlus - 1, datePlus, datePlus + 1, datePlus + 2, datePlus + 3].map((e) => createDate(e));

  const dragEndActions = (result) => {
    if (result.source.droppableId !== result.destination.droppableId) {
      //console.log(currentUser, result.source.droppableId, allTodos, result.draggableId);
      addTodo(currentUser, result.destination.droppableId, allTodos, result.draggableId);
      deleteTodo(currentUser, result.source.droppableId, allTodos, result.draggableId);
    }
  };

  return (
    <div className="homepage">
      <LeftToolbar setDatePlus={setDatePlus} setCurrentDate={setCurrentDate} />
      <div className="daily--todo-list">
        <DragDropContext onDragEnd={dragEndActions}>
          {dateArrays.map((e, i) => {
            return (
              <TodoPage
                key={i}
                formatedDate={e}
                datePlus={datePlus}
                fetchTodos={fetchTodos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                addTodo={addTodo}
              />
            );
          })}
        </DragDropContext>
      </div>
      <RightToolbar setDatePlus={setDatePlus} currentDate={currentDate} setCurrentDate={setCurrentDate} />

      {!currentUser ? <Redirect to="/" /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allTodos: state.todos.todos,
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (user, date, fulltodolist, todovalue) =>
      dispatch(todosActions.DELETE_TODO(user, date, fulltodolist, todovalue)),
    updateTodo: (user, date, fulltodolist, todovalue) =>
      dispatch(todosActions.UPDATE_TODO(user, date, fulltodolist, todovalue)),
    addTodo: (user, date, fulltodolist, newtodo) => dispatch(todosActions.ADD_TODO(user, date, fulltodolist, newtodo)),
    fetchTodos: (currentUser, date) => dispatch(todosActions.FETCH_TODOS(currentUser, date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
