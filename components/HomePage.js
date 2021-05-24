import { useState, useEffect, useContext } from "react";
import moment from "moment";
import HomeNav from "../components/HomeNav";
import homeStyles from "../styles/HomePage.module.css";
import TodoBoard from "../components/TodoBoard";
import { db } from "../firebase/main";
import Spinner from "../components/Spinner";
import UserContext from "../userContext";

export default function HomePage() {
  //date stuffs
  const [currentDate, setCurrentDate] = useState(new Date());
  const [datePlus, setDatePlus] = useState(0);
  const createDate = (daysToAdd) => {
    return moment(currentDate).add({ days: daysToAdd }).format("dddd, MMMM D YYYY");
  };
  //creating dates depending on currentDate plus addedDate
  const dates = [datePlus, datePlus + 1, datePlus + 2, datePlus + 3].map((e) => createDate(e));

  //all todos storage
  const [todos, setTodos] = useState([]);

  //loading handler
  const [loading, setLoading] = useState(true);

  //getting current user email from context
  const { currentUserEmail } = useContext(UserContext);

  //dark mode
  const [darkMode, setDarkMode] = useState(false);

  //getting all todo list for all dates
  useEffect(() => {
    db.collection(currentUserEmail)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          setTodos((prev) => [...prev, { date: doc.id, todos: doc.data()?.todos || [] }]);
        });
        setLoading(false);
      });
  }, []);

  return (
    <div className={darkMode ? homeStyles.darkMode : null}>
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ marginTop: "3vh" }}>
          {/*option section*/}
          <HomeNav setDatePlus={setDatePlus} darkMode={darkMode} setDarkMode={setDarkMode} />

          {/*todo boards*/}
          <div className={homeStyles.todosBoard}>
            {dates.map((e, i) => {
              return (
                <section key={i}>
                  <TodoBoard
                    todosDate={e}
                    fullTodoList={todos}
                    setFullTodos={setTodos}
                    todos={todos[todos.findIndex((td) => td.date === e)]?.todos || []}
                  />
                </section>
              );
            })}
          </div>
        </div>
      )}

      <style jsx global>{`
        body,
        html {
          background: ${darkMode ? "#303030" : "white"} !important;
        }
      `}</style>
    </div>
  );
}
