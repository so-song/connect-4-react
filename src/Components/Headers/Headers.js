import React from "react";
import logo from "../../logo.svg";
import "./Headers.css";

const Headers = props => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Connect 4</h1>
    </header>
  );
};

export default Headers;
