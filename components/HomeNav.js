import homeNavStyles from "../styles/HomeNav.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiMoon } from "react-icons/bi";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlinePoweroff } from "react-icons/ai";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { useContext } from "react";
import UserContext from "../userContext";

export default function HomeNav({ demoMode, setDatePlus, darkMode, setDarkMode }) {
  const { setEmailAddress } = useContext(UserContext);

  const logOut = () => {
    if (!demoMode) {
      localStorage.setItem("loginToken", null);
      setEmailAddress("");
    }
  };

  return (
    <div className={homeNavStyles.homeNav}>
      <button onClick={() => setDatePlus((prev) => prev - 1)}>
        <IoIosArrowBack />
      </button>
      <button onClick={() => setDatePlus((prev) => prev + 1)}>
        <IoIosArrowForward />
      </button>
      <button onClick={() => setDatePlus(0)}>
        <RiHome2Line />
      </button>
      <button onClick={() => setDarkMode((prev) => !prev)}>{darkMode ? <RiLightbulbFlashLine /> : <BiMoon />}</button>
      <button onClick={logOut}>
        <AiOutlinePoweroff />
      </button>
    </div>
  );
}
