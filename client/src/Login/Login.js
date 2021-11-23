import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
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
        <div className="login__input">
          <p>E-mail</p>
          <input />
        </div>
        <div className="login__input">
          <p>Password</p>
          <input />
        </div>
        <button className="login__button">Sign In</button>
        <p>
          By signing in you agree to Amazon's Conditions of Use and Sale. Please
          see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads
          Notice
        </p>
        <button className="login__buttonCreate">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
