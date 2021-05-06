import MainImage from "../assets/main.svg";
import { useHistory } from "react-router-dom";
import FiveStarImage from "../assets/Stars.png";

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
          <img src={FiveStarImage} alt="main" />
          <p>“I’ve tried a million other todo apps and can’t find anything else I like more than Falloora!”</p>
        </div>

        <div>
          <img src={FiveStarImage} alt="main" />
          <p>
            “With your service, I can stay organized in a way that works for me. Yours is the most impactful tool I use.
            Thank you so much for giving the world this magical helper.”
          </p>
        </div>

        <div>
          <img src={FiveStarImage} alt="main" />
          <p>
            “Many to-do apps have the feel of a project management tool. Falloora replaces pen and paper in a great way.
            Thanks!”
          </p>
        </div>

        <div>
          <img src={FiveStarImage} alt="main" />
          <p>“What makes it so great is that it’s clean and slick and not too complicated.”</p>
        </div>
      </section>

      <section></section>
    </main>
  );
};

export default LandingPageMain;
