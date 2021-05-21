import todoDetailModalStyles from "../styles/TodoDetailModal.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { ImPencil2 } from "react-icons/im";
import { MdDone } from "react-icons/all";
import { useState } from "react";

export default function TodoDetailModal({ close, todo, date }) {
  const [todoVal, setTodoVal] = useState(todo);

  //focus input on edit btn click
  const focusInputField = () => {
    const editTodoInput = document.querySelector(".edit-todo");
    editTodoInput.focus();
  };

  //edit confirm
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

        <span>
          <button>
            <MdDone />
          </button>

          <button onClick={focusInputField}>
            <ImPencil2 />
          </button>

          <button>
            <RiDeleteBin7Line />
          </button>
        </span>
      </div>

      <form onSubmit={editTodo}>
        <input className="edit-todo" type="text" value={todoVal} onChange={(e) => setTodoVal(e.target.value)} />
      </form>
    </div>
  );
}
