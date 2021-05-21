import Meta from "../components/Meta";
import TodosBoard from "../components/TodosBoard";
import { useState } from "react";
import moment from "moment";

const home = () => {
  const todos = [
    ["brush", "ass"],
    ["headache", "dunk"],
    ["different asses and bigger boobs if my eyse are black or blues", "testes"],
    ["tetth ahce", "zello is my best asest better than bloddy bitcoin"],
  ];

  //date generate
  const [currentDate, setCurrentDate] = useState(new Date());
  const [datePlus, setDatePlus] = useState(0);
  const createDate = (daysToAdd) => {
    return moment(currentDate).add({ days: daysToAdd }).format("dddd, MMMM D YYYY");
  };

  const dates = [datePlus, datePlus + 1, datePlus + 2, datePlus + 3].map((e) => createDate(e));

  return (
    <div style={{ marginTop: "15vh" }}>
      <Meta title="Snaptask-App" />
      <TodosBoard dates={dates} todos={todos} />

      <style jsx global>{`
        nav {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default home;
