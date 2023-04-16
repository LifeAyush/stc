import React from "react";
import "./hero.css";
import homeVector from "../../Assets/Images/homeVector.svg";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const Hero = () => {
  return (
    <div className="hero">
      <img src={homeVector} alt="IIT Roorkee" className="hero-vector" />
      <div className="hero-header">
        <h1 className="hero-title">Students’ Technical Council</h1>
        <h3 className="hero-subtitle">Where Tech meets Innovation</h3>
      </div>
      <PrimaryBtn link="#features" text="About Us" type="light" />
    </div>
  );
};

export default Hero;
