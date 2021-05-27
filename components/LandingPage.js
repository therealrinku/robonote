import landingPageStyles from "../styles/LandingPage.module.css";
import { useRouter } from "next/router";
import MainImage from "../assets/MainImage.svg";
import Navbar from "../components/Navbar";
import DragDropVideo from "../assets/dnd.mp4";
import SimpleLayoutVideo from "../assets/sim.mp4";
import DarkModeVideo from "../assets/dm.mp4";

export default function LandingPage() {
  const router = useRouter();

  //features
  const features = [
    { video: DragDropVideo, title: "Drag and drop todos." },
    { video: SimpleLayoutVideo, title: "Simple and easy to use layout." },
    { video: DarkModeVideo, title: "Dark mode for eye compatibitlity at night." },
  ];

  //reviews
  const reviews = [
    {
      userImageUrl: "https://bit.ly/2T9n057",
      userName: "Jennifer Rodriguez",
      review: "Snaptask is simply the best todo app i have ever used.",
    },
    {
      userImageUrl: "https://bit.ly/33XNNn5",
      userName: "Abella Fernandes",
      review: "Snaptask is very simple and easy to use todo app to get more done with less distractions.",
    },
    {
      userImageUrl: "https://bit.ly/3fN3kf1",
      userName: "Tom Zack",
      review: "Simply the best todo app with minmalistic design.",
    },
    {
      userImageUrl: "https://bit.ly/2T5kgFL",
      userName: "Blake Robbins",
      review: "I wanted a todo app with less distractive looks and simple design , well i got one now.",
    },
    {
      userImageUrl: "https://bit.ly/3416CFK",
      userName: "Tony Heaton",
      review: "My search for best todo app has come to an end , thanks to snaptask.",
    },
    {
      userImageUrl: "https://bit.ly/3hG8P1t",
      userName: "Bella Porch",
      review: "Best todo app i have ever seen, minimal and simple no hassle.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={landingPageStyles.sectionOne}>
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

      <div className={landingPageStyles.sectionTwo}>
        {features.map((feature, i) => {
          return (
            <section key={i}>
              <h4>{feature.title}</h4>
              <video muted autoPlay loop play>
                <source src={feature.video} type="video/mp4" />
              </video>
            </section>
          );
        })}
      </div>

      <div className={landingPageStyles.sectionThree}>
        <div>
          {reviews.splice(0, 3).map((review) => {
            return (
              <section>
                <div>
                  <img src={review.userImageUrl} alt="user" />
                  <span>{review.userName}</span>
                </div>

                <p>{review.review}</p>
              </section>
            );
          })}
        </div>

        <div>
          {reviews.splice(-3).map((review) => {
            return (
              <section>
                <div>
                  <img src={review.userImageUrl} alt="user" />
                  <span>{review.userName}</span>
                </div>

                <p>{review.review}</p>
              </section>
            );
          })}
        </div>
      </div>

      <footer className={landingPageStyles.footer}>
        <p>2021 Snaptask Inc</p>
        <p>Made in Nepal</p>
      </footer>
    </>
  );
}
