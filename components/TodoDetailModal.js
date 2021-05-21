import todoDetailModalStyles from "../styles/TodoDetailModal.module.css";

const TodoDetailModal = ({ close, todo }) => {
  return (
    <div className={todoDetailModalStyles.todoDetailModal}>
      <p>{todo}</p>
    </div>
  );
};

export default TodoDetailModal;
