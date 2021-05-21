import todosBoardStyles from "../styles/TodosBoard.module.css";
import TodoBoard from "./TodoBoard";

const TodosBoard = () => {
  const boards = ["sunday", "monday", "tuesday", "wednesday"];
  const todos = [
    ["brush", "ass"],
    ["headache", "dunk"],
    ["different asses and bigger boobs if my eyse are black or blues", "testes"],
    ["tetth ahce", "zello is my best asest better than bloddy bitcoin"],
  ];
  return (
    <div className={todosBoardStyles.todosBoard}>
      {boards.map((e, i) => {
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
