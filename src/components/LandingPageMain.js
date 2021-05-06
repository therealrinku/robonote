import MainImage from "../assets/main.svg";
import { useHistory } from "react-router-dom";
import { FcExpand, FcBarChart, FcUpRight } from "react-icons/all";

const LandingPageMain = () => {
  const history = useHistory();

  return (
    <main className="landing-main">
      <section>
        <div>
          <img src={MainImage} alt="main" />
        </div>

        <div>
          <h2>
            Fallora is your new daily task manager
            <br /> to take you to the moon.
          </h2>
          <button onClick={() => history.push("/signup")}>Start 15 days free trial</button>
        </div>
      </section>

      <section>
        <div>
          <FcExpand />
          <p>Simple and Easy to use design</p>
        </div>

        <div>
          <FcBarChart />
          <p>Weekly report</p>
        </div>

        <div>
          <FcUpRight />
          <p>Drag and Drop functionality</p>
        </div>
      </section>
    </main>
  );
};

export default LandingPageMain;
