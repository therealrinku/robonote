import appStyles from "../styles/App.module.css";
import Meta from "../components/Meta";
import TodosBoard from "../components/TodosBoard";

const home = () => {
  return (
    <div className={appStyles.app}>
      <Meta title="Snaptask-App" />
      <TodosBoard />
    </div>
  );
};

export default home;
