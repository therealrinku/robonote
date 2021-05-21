import todoDetailModalStyles from "../styles/TodoDetailModal.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useState } from "react";

export default function TodoDetailModal({ close, todo, date }) {
  const [todoVal, setTodoVal] = useState(todo);

  const editTodo = (e) => {
    e.preventDefault();
  };
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

      <form onSubmit={editTodo}>
        <input type="text" value={todoVal} onChange={(e) => setTodoVal(e.target.value)} />
      </form>
    </div>
  );
}
