import appStyles from "../styles/App.module.css";
import moment from "moment";
import TodoItem from "../components/TodoItem";

const TodoBoard = ({ todos, todosDate }) => {
  //check if date is past
  const todayDate = moment(new Date());
  const dateDiff = moment(todosDate).diff(todayDate, "days");

  return (
    <>
      {/* date */}
      <p style={dateDiff < 0 ? { color: "grey" } : null}>{todosDate}</p>

      {/* todo list*/}
      <div className={appStyles.todos}>
        {todos.map((todo, i) => {
          return <TodoItem key={i} todo={todo} />;
        })}
      </div>

      {/*new todo input*/}
      <input type="text" />

      {/*dummy lines*/}
      <div>
        {[...Array(14 - todos.length + 1)].map((line) => {
          return <li key={line}></li>;
        })}
      </div>
    </>
  );
};

export default TodoBoard;
