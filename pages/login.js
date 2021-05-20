import loginPageStyles from "../styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
import Meta from "../components/Meta";

const loginPage = () => {
  //form handlers
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //show hide password
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={loginPageStyles.loginPage}>
      <Meta title="Snaptask - Login" />
      <div>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
          <section>
            <input type="checkbox" value={showPassword} onChange={() => setShowPassword((prev) => !prev)} />
            <p>Show Password</p>
          </section>
          <p>
            Don't have an account? <Link href="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default loginPage;
