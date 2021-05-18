import loginPageStyles from "../styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";

const signupPage = () => {
  //form handlers
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <div className={loginPageStyles.loginPage}>
      <div>
        <form>
          <label for="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
          <label for="password">Password</label>
          <input type="password" id="password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
          <label for="password2">Repeat password</label>
          <input type="password" id="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} />
          <button>Signup</button>
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </form>
      </div>

      <style jsx global>{`
        body {
          background: #f6f8f9;
        }
        nav {
          background: #f6f8f9 !important;
        }
      `}</style>
    </div>
  );
};

export default signupPage;
