import React from "react";
import "./metrics.css";

const MetricsLogoFlex = ({ logos, type, startIndex }) => {
  return (
    <div
      className={
        type === "large"
          ? "metrics-logos-flex-large"
          : "metrics-logos-flex-medium"
      }
    >
      {logos.map((logo) => {
        if (
          logo.id > startIndex &&
          logo.id < startIndex + (type === "large" ? 8 : 7)
        ) {
          return (
            <img src={logo.img} alt="STC" className="metrics-group-logo" />
          );
        }
      })}
    </div>
  );
};

export default MetricsLogoFlex;
