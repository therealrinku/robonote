import { Fragment, useState } from "react";
import Backdrop from "./Backdrop";
import TodoDetailModal from "./TodoDetailModal";

export default function TodoItem({ todo, date, index, doUndo, deleteTodo }) {
  const [showDetailModal, setShowDetailModal] = useState(false);

  //toggle detail modal
  const toggleDetailModal = () => {
    setShowDetailModal((prev) => !prev);
    //toggling overflow of body
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <li style={todo.completed ? { color: "grey" } : null} onClick={toggleDetailModal}>
        {todo.title}
      </li>

      {/*todo detail modal */}
      {showDetailModal ? (
        <Fragment>
          <TodoDetailModal
            deleteTodo={deleteTodo}
            close={toggleDetailModal}
            todo={todo.title}
            date={date}
            doUndo={doUndo}
            index={index}
            completed={todo.completed}
          />
          <Backdrop toggle={toggleDetailModal} />
        </Fragment>
      ) : null}

      {/*hover effect */}
      <style jsx>{`
        li:hover {
          cursor: default;
        }
      `}</style>
    </>
  );
}
