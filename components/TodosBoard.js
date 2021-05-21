import todosBoardStyles from "../styles/TodosBoard.module.css";
import TodoBoard from "./TodoBoard";

const TodosBoard = ({ dates, todos }) => {
  return (
    <div className={todosBoardStyles.todosBoard}>
      {dates.map((e, i) => {
        return (
          <section key={i}>
            <TodoBoard todos={todos[i]} todosDate={e} />
          </section>
        );
      })}
    </div>
  );
};

export default TodosBoard;
