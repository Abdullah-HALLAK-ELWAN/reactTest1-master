import React from "react";

import "./Header.scss";
const Header = ({ pageName }) => {
  return (
    <nav className="header">
      <div className="main-header-content">
        <div className="margin-div-left" />
        <p className="header-title">
          <a href="/">DEMO Streaming</a>
        </p>
        <div className="buttons">
          <button
            className="login"
            onClick={() => {
              console.log("login");
            }}
          >
            Log in
          </button>
          <button
            className="start-your-free-trial"
            onClick={() => {
              console.log("trial");
            }}
          >
            Start your free trial
          </button>
        </div>
        <div className="margin-div-right" />
      </div>
      <div className="second-header">
        <div className="margin-div-left" />
        <h4 className="second-header-title">{pageName}</h4>
      </div>
    </nav>
  );
};
export default Header;
