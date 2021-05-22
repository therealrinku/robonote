import Meta from "../components/Meta";
import { useState } from "react";
import moment from "moment";
import HomeNav from "../components/HomeNav";
import appStyles from "../styles/App.module.css";
import TodoBoard from "../components/TodoBoard";

export default function home({ todos }) {
  //date generate
  const [currentDate, setCurrentDate] = useState(new Date());
  const [datePlus, setDatePlus] = useState(0);
  const createDate = (daysToAdd) => {
    return moment(currentDate).add({ days: daysToAdd }).format("dddd, MMMM D YYYY");
  };

  const dates = [datePlus, datePlus + 1, datePlus + 2, datePlus + 3].map((e) => createDate(e));

  return (
    <div style={{ marginTop: "3vh" }}>
      <Meta title="Snaptask-App" />

      {/*option section*/}
      <HomeNav setDatePlus={setDatePlus} />

      {/*todo boards*/}
      <div className={appStyles.todosBoard}>
        {dates.map((e, i) => {
          return (
            <section key={i}>
              <TodoBoard todos={todos[i]} todosDate={e} />
            </section>
          );
        })}
      </div>

      {/*hiding landing page navbar */}
      <style jsx global>{`
        nav {
          display: none !important;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps(context) {
  const users = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const data = await users.json();

  const parsed = [];

  data.slice(0, 4).forEach((d) => {
    parsed.push([{ title: d.title, completed: d.completed }]);
  });

  return {
    props: {
      todos: parsed,
    }, // will be pased to the page component as props
  };
}
