import todosBoardStyles from "../styles/TodosBoard.module.css";
import TodoBoard from "./TodoBoard";
import moment from "moment";
import { useState } from "react";

const TodosBoard = () => {
  const todos = [
    ["brush", "ass"],
    ["headache", "dunk"],
    ["different asses and bigger boobs if my eyse are black or blues", "testes"],
    ["tetth ahce", "zello is my best asest better than bloddy bitcoin"],
  ];

  //date generate
  const [currentDate, setCurrentDate] = useState(new Date());
  const [datePlus, setDatePlus] = useState(0);
  const createDate = (daysToAdd) => {
    return moment(currentDate).add({ days: daysToAdd }).format("dddd, MMMM D YYYY");
  };

  const dates = [datePlus, datePlus + 1, datePlus + 2, datePlus + 3].map((e) => createDate(e));

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
