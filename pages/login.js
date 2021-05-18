import loginPageStyles from "../styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";

const loginPage = () => {
  //form handlers
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={loginPageStyles.loginPage}>
      <div>
        <form>
          <label for="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus />
          <label for="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button>Login</button>
          <p>
            Don't have an account? <Link href="/signup">Sign up</Link>
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

export default loginPage;
