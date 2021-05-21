import todosBoardStyles from "../styles/TodosBoard.module.css";

const TodosBoard = () => {
  const boards = ["sunday", "monday", "tuesday", "wednesday"];
  const todos = [
    "brush",
    "headache",
    "different asses and bigger boobs if my eyse are black or blues",
    "tetth ahce",
    "hello",
    "zello is my best asest better than bloddy bitcoin",
    "trello",
  ];
  return (
    <div className={todosBoardStyles.todosBoard}>
      {boards.map((e, i) => {
        return (
          <section key={i}>
            <p className="date">{e}</p>
            <input type="text" />
            <div className={todosBoardStyles.todos}>
              {todos.map((todo, i) => {
                return <li key={i}>{todo}</li>;
              })}
            </div>
            <div className="dummy-lines">
              {[...Array(14 - todos.length + 1)].map((line) => {
                return <li key={line}></li>;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default TodosBoard;
