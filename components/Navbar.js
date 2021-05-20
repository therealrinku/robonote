import navbarStyles from "../styles/Navbar.module.css";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className={navbarStyles.nav}>
      <ul>
        <Link href="/">Snaptask</Link>
      </ul>

      <ul>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
