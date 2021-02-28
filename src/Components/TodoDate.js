import moment from "moment";

const TodoDate = ({ formatedDate, datePlus }) => {
  const formatedTodaysDate = moment(moment(new Date())).format(
    "ddd MMM Do YYYY"
  );

  const isToday = formatedDate === formatedTodaysDate;
  return (
    <div className="todo--date">
      <i className={isToday ? "date-today" : null}></i>
      <p className={!isToday ? "date-backward" : null}>{formatedDate}</p>
    </div>
  );
};

export default TodoDate;
