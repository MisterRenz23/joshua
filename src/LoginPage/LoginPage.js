import React from "react";
import "./login-page.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container">
      <input type="checkbox" id="toggle" />
      <div className="signin">
        <h1>Sign In</h1>
        <form>
          <div className="social">
            <a href="#">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <p>Or use enter info</p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <small>Forgot Password</small>
          <input type="submit" value="Login" />
          <small>
            Don't have an account? <label for="toggle">Sign Up</label>{" "}
          </small>
        </form>
      </div>
      <div className="signup">
        <h1>Create an account</h1>
        <form>
          <div className="social">
            <a href="https://gmail.com">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <p>Or enteryour details </p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="submit" value="Create Account" />
          <small>
            Already have an account?{" "}
            <Link to="/success" className="test">
              <label>Sign In</label>
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
