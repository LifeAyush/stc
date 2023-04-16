import React from "react";
import "./primaryBtn.css";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ link, text, type }) => {
  return (
    <Link
      to={link}
      className={type === "light" ? "primary-Btn light" : "primary-Btn dark"}
    >
      {text}
    </Link>
  );
};

export default PrimaryBtn;
