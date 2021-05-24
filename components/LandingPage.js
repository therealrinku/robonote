import landingPageStyles from "../styles/LandingPage.module.css";
import { useRouter } from "next/router";
import MainImage from "../assets/MainImage.svg";
import { AiOutlineDrag } from "react-icons/ai";
import { VscListFilter } from "react-icons/vsc";
import { BiMoon } from "react-icons/bi";

export default function LandingPage() {
  const router = useRouter();

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

  //quote
  const quotes = [
    {
      text: "There is no greatness where there is not simplicity, goodness, and truth.",
      author: "-Leo Tolstoy, 1828",
    },
    { text: "Simplicity is the ultimate sophistication.", author: "-Leonardo da Vinci, 1452" },
    { text: "The simplest things are often the truest.", author: "-Richard Bach, 1936" },
    {
      text: "There are two ways to be rich: One is by acquiring much, and the other is by desiring little.",
      author: "-Jackie French Koller, 1948",
    },
  ];

  //randomly selecting quote
  const selectedQuote = quotes[Math.floor(Math.random() * (3 - 0 + 1)) + 0];

  return (
    <>
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
        <div>
          <section>
            <li>
              <AiOutlineDrag />
            </li>
            <p>Drag and Drop functionality.</p>
          </section>

          <section>
            <li>
              <VscListFilter />
            </li>
            <p>Easy to use simple layout.</p>
          </section>

          <section>
            <li>
              <BiMoon />
            </li>
            <p>Dark mode for night.</p>
          </section>
        </div>
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

      <div className={landingPageStyles.sectionFour}>
        <h3>“{selectedQuote.text}”</h3>
        <p>{selectedQuote.author}</p>
      </div>

      <footer className={landingPageStyles.footer}>
        <p>2021 Snaptask Inc</p>
        <p>Made in Nepal</p>
      </footer>
    </>
  );
}
