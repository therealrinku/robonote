import Meta from "../components/Meta";
import TodosBoard from "../components/TodosBoard";

const home = () => {
  return (
    <div style={{ marginTop: "15vh" }}>
      <Meta title="Snaptask-App" />
      <TodosBoard />

      <style jsx global>{`
        nav {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default home;
