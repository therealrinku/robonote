import homeNavStyles from "../styles/HomeNav.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiDotsVertical } from "react-icons/bi";

const HomeNav = () => {
  return (
    <div className={homeNavStyles.homeNav}>
      <button>
        <BiDotsVertical />
      </button>
      <button>
        <IoIosArrowBack />
      </button>
      <button>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default HomeNav;
