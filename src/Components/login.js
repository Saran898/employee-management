import React, { Component } from "react";
import "../Components/login.css";
import Logo from "../img/logo.png";
class Login extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div id="main-outer-div">
            <div id="logo-div">
              <img id="logo-img" src={Logo} alt="" />
            </div>
            <div id="title-div">
              <h4 className="title">Sign in</h4>
            </div>

            <div id="outer-login-form-div">
              <form action="" method="" onSubmit={this.props.onSubmit}>
                <input
                  className="login-form-input"
                  type="text"
                  placeholder="Email"
                  required="required"
                  name="Username"
                />
                <input
                  className="login-form-input"
                  type="password"
                  placeholder="Password"
                  required="required"
                />
                <input
                  className="login-form-input"
                  type="submit"
                  value="Sign in"
                  id="submitBtn"
                />
                {!this.props.pass ? (
                  <p className="alert">Invalid UserName or Password</p>
                ) : (
                  ""
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;
