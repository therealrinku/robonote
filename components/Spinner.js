import spinnerStyles from "../styles/Spinner.module.css";

export default function Spinner() {
  return (
    <div className={spinnerStyles.spinnerParent}>
      <div className={spinnerStyles.spinner}></div>
    </div>
  );
}
