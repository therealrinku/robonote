import homeSectionOneStyles from "../styles/HomeSectionOne.module.css";
import { useRouter } from "next/router";
import MainImage from "../assets/MainImage.svg";

export default function HomepageOne() {
  const router = useRouter();

  return (
    <div className={homeSectionOneStyles.homeSectionOne}>
      <section>
        <h2>Snaptask is your new todo list manager to help you acheive your goals.</h2>
        <div>
          <input type="text" placeholder="Type your email here" />
          <button onClick={() => router.push("/signup")}>Start for free</button>
        </div>
      </section>

      <section>
        <img src={MainImage} alt="test" />
      </section>
    </div>
  );
}
