import HomeSectionThreeStyles from "../styles/HomeSectionThree.module.css";

export default function HomeSectionThree() {
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
    <div className={HomeSectionThreeStyles.homeSectionThree}>
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
  );
}
