import todoDetailModalStyles from "../styles/TodoDetailModal.module.css";
import { AiOutlineCalendar, AiOutlineRedo } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";

export default function TodoDetailModal({ completed, close, todo, date, doUndo, index, deleteTodo }) {
  //do undo and close
  const DOUNDO = () => {
    doUndo(index);
    close();
  };

  //delete and close
  const DELETE = () => {
    deleteTodo(index);
    close();
  };

  return (
    <div className={todoDetailModalStyles.todoDetailModal}>
      <div>
        <span>
          <AiOutlineCalendar />
          <p>{date}</p>
          <i style={{ marginLeft: "8px" }}>{completed ? <FcCheckmark /> : null}</i>
        </span>

        <span>
          <button onClick={DOUNDO}>{completed ? <AiOutlineRedo /> : <MdDone />}</button>

          <button onClick={DELETE}>
            <RiDeleteBin7Line />
          </button>
        </span>
      </div>

      <p>{todo}</p>
    </div>
  );
}
