import appStyles from "../styles/App.module.css";
import Meta from "../components/Meta";

const home = () => {
  return (
    <div className={appStyles.app}>
      <Meta title="Snaptask-App" />
    </div>
  );
};

export default home;
