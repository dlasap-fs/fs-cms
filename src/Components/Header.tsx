import "./Components.css";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-buttons">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </div>
      <div className="header-buttons">
        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
          About
        </Link>
      </div>
    </>
  );
};

export default Header;
