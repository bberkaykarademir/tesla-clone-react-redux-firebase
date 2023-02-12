import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../firebase";
import { login as loginHandler } from "../store/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      dispatch(loginHandler(user));
      navigate("/account");
    }
  };
  return (
    <div className="signIn">
      <a href="http://localhost:3000/">
        <img src="/img/logo.svg" />
      </a>
      <div className="sign-section">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <div className="line">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <Link to="/CreateAcc">
          <button className="create-button">Create Account</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
