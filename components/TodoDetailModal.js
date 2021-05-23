import todoDetailModalStyles from "../styles/TodoDetailModal.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";

export default function TodoDetailModal({ todo, date, doUndo, index }) {
  return (
    <div className={todoDetailModalStyles.todoDetailModal}>
      <div>
        <span>
          <AiOutlineCalendar />
          <p>{date}</p>
        </span>

        <span>
          <button onClick={() => doUndo(index)}>
            <MdDone />
          </button>

          <button>
            <RiDeleteBin7Line />
          </button>
        </span>
      </div>

      <p>{todo}</p>
    </div>
  );
}
