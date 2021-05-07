import moment from "moment";

const TodoDate = ({ formatedDate }) => {
  const TodayDate = moment(new Date());
  const dateDiff = moment(formatedDate).diff(TodayDate, "days");

  return (
    <div className="todo--date">
      <p style={dateDiff < 0 ? { color: "grey" } : null}>{formatedDate}</p>
    </div>
  );
};

export default TodoDate;
