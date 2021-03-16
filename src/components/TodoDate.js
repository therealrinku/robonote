import moment from "moment";

const TodoDate = ({ formatedDate }) => {
  const formatedTodaysDate = moment(moment(new Date())).format(
    "ddd MMM Do YYYY"
  );

  const isToday = formatedDate === formatedTodaysDate;
  return (
    <div className="todo--date">
      <i className={isToday ? "date-today" : null}></i>
      <p>{formatedDate}</p>
    </div>
  );
};

export default TodoDate;
