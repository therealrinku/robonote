import Meta from "../components/Meta";
import TodosBoard from "../components/TodosBoard";

const home = () => {
  return (
    <div style={{ marginTop: "20vh" }}>
      <Meta title="Snaptask-App" />
      <TodosBoard />
    </div>
  );
};

export default home;
