import todosBoardStyles from "../styles/TodosBoard.module.css";

const TodoBoard = ({ todos, todosDate }) => {
  return (
    <>
      <p>{todosDate}</p>
      <input type="text" />
      <div className={todosBoardStyles.todos}>
        {todos.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </div>
      <div>
        {[...Array(14 - todos.length + 1)].map((line) => {
          return <li key={line}></li>;
        })}
      </div>
    </>
  );
};

export default TodoBoard;
