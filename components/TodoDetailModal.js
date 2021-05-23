import todoDetailModalStyles from "../styles/TodoDetailModal.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";

export default function TodoDetailModal({ close, todo, date, doUndo, index }) {
  //do undo and close
  const DOUNDO = () => {
    doUndo(index);
    close();
  };

  return (
    <div className={todoDetailModalStyles.todoDetailModal}>
      <div>
        <span>
          <AiOutlineCalendar />
          <p>{date}</p>
        </span>

        <span>
          <button onClick={DOUNDO}>
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
