import homeSectionTwoStyles from "../styles/HomeSectionTwo.module.css";
import { AiOutlineDrag } from "react-icons/ai";
import { VscListFilter } from "react-icons/vsc";
import { BiMoon } from "react-icons/bi";

export default function HomeSectionTwo() {
  return (
    <div className={homeSectionTwoStyles.homeSectionTwo}>
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
  );
}
