import navbarStyles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
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
}
