import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="title">
          {" "}
          <Title />{" "}
        </div>
        <div className="header">
          {" "}
          <Header />{" "}
        </div>
        <div className="side-bar">
          {" "}
          <SideBar />{" "}
        </div>
        <div className="content">
          {" "}
          <Content />{" "}
        </div>
        <div className="footer">
          {" "}
          <Footer />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
