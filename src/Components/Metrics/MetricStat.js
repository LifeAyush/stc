import React from "react";
import "./metrics.css";

const MetricStat = ({ number, text }) => {
  return (
    <div className="metrics-stat-flex">
      <div className="metrics-stat-flex-number">{number}</div>
      <div className="metrics-stat-flex-text">{text}</div>
    </div>
  );
};

export default MetricStat;
