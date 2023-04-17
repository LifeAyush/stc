import React from "react";
import "./features.css";

const Feature = ({ data, active, setActive }) => {
  return (
    <div
      className={active ? "feature f-active" : "feature"}
      onClick={() => setActive(data.id)}
    >
      <div className={active ? "feature-title ft-active" : "feature-title"}>
        {data.title}
      </div>
      <div className={active ? "feature-para ft-active" : "feature-para"}>
        {data.desc}
      </div>
    </div>
  );
};

export default Feature;
