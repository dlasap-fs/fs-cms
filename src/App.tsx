import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import About from "./Components/About";

import { TabContext } from "./Context/Context";
function App() {
  const [tab, setTab] = React.useState("form");

  const handleTab = (tab: string) => {
    setTab(tab);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <TabContext.Provider value={{ tab, setTab }}>
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
                    <SideBar />{" "}
                  </div>
                  <div className="content">
                    <Content />
                  </div>
                  <div className="footer">
                    {" "}
                    <Footer />{" "}
                  </div>
                </div>
              </div>
            </TabContext.Provider>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <h1 style={{ fontSize: "30px" }}>
              ERROR 404: PAGE NOT FOUND!
              <br />
              <p>
                <Link to="/" style={{ padding: 5 }}>
                  HOME
                </Link>
              </p>
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
