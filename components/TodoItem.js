import { Fragment, useState } from "react";
import Backdrop from "./Backdrop";
import TodoDetailModal from "./TodoDetailModal";

export default function TodoItem({ todo, date }) {
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
      <li onClick={toggleDetailModal}>{todo}</li>

      {/*todo detail modal */}
      {showDetailModal ? (
        <Fragment>
          <TodoDetailModal close={toggleDetailModal} todo={todo} date={date} />
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