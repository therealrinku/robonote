import loginPageStyles from "../styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
import Meta from "../components/Meta";

const signupPage = () => {
  //form handlers
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  //show hide password
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={loginPageStyles.loginPage}>
      <Meta title="Snaptask- Signup" />
      <div>
        <form>
          <label for="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
          <label for="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <label for="password2">Repeat password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button>Signup</button>
          <section>
            <input type="checkbox" value={showPassword} onChange={() => setShowPassword((prev) => !prev)} />
            <p>Show Password</p>
          </section>
          <p style={{ opacity: "0.6" }}>By signing up, you agree to our terms and policies.</p>
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signupPage;
