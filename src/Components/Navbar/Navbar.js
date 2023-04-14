import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Assets/Images/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="nav">
      <img src={logo} alt="STC" className="nav-logo" />
      <div className="nav-links">
        <div
          className={active === "groups" ? "nav-link nav-acitve" : "nav-link"}
        >
          Groups
        </div>
        <div
          className={active === "events" ? "nav-link nav-acitve" : "nav-link"}
        >
          Events
        </div>
        <div
          className={active === "team" ? "nav-link nav-acitve" : "nav-link"}
        >
          Team
        </div>
        <div
          className={active === "contact" ? "nav-link nav-acitve" : "nav-link"}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Navbar;
