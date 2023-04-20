import React from "react";
import "./navbar.css";
import logo from "../../Assets/Images/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const locator = useLocation();
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="STC" className="nav-logo" />
      </Link>
      <div className="nav-links">
        <Link
          to="/"
          className={
            locator.pathname === "/" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          Home
        </Link>
        <Link
          to="/groups"
          className={
            locator.pathname === "/groups" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          Groups
        </Link>
        <Link
          to="/events"
          className={
            locator.pathname === "/events" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          Events
        </Link>
        <Link
          to="/team"
          className={
            locator.pathname === "/team" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          Team
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
