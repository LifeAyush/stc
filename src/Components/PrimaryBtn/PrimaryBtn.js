import React from "react";
import "./primaryBtn.css";

const PrimaryBtn = ({ link, text, type }) => {
  return (
    <a
      href={link}
      className={type === "light" ? "primary-Btn light" : "primary-Btn dark"}
    >
      {text}
    </a>
  );
};

export default PrimaryBtn;
