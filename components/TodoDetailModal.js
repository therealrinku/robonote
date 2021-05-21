import todoDetailModalStyles from "../styles/TodoDetailModal.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";

const TodoDetailModal = ({ close, todo, date }) => {
  return (
    <div className={todoDetailModalStyles.todoDetailModal}>
      <div>
        <span>
          <AiOutlineCalendar />
          <p>{date}</p>
        </span>

        <button>
          <RiDeleteBin7Line />
        </button>
      </div>

      <p>{todo}</p>
    </div>
  );
};

export default TodoDetailModal;
