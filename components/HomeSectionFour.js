import homeSectionFourStyles from "../styles/HomeSectionFour.module.css";

const HomeSectionFour = () => {
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
    <div className={homeSectionFourStyles.homeSectionFour}>
      <h3>“{selectedQuote.text}”</h3>
      <p>{selectedQuote.author}</p>
    </div>
  );
};

export default HomeSectionFour;
