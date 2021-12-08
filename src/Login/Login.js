import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/" className="login__link">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__data">
        <div className="login__container">
          <h1>Sign-In</h1>
        </div>
        <form>
          <div className="login__input">
            <p>E-mail</p>
            <input
              type="email"
              value={email}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="login__input">
            <p>Password</p>
          </div>
          <button className="login__button" onClick={login} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use and Sale. Please
          see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads
          Notice
        </p>
        <button onClick={register} className="login__register">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
