import React from "react";
import "./metrics.css";
import logo from "../../Assets/Images/logo.svg";
import groupLogo from "../../Assets/Images/groupLogo.svg";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import MetricStat from "./MetricStat";
import MetricsLogoFlex from "./MetricsLogoFlex";

const Metrics = () => {
  const Logos = [
    {
      id: 1,
      img: groupLogo,
    },
    {
      id: 2,
      img: groupLogo,
    },
    {
      id: 3,
      img: groupLogo,
    },
    {
      id: 4,
      img: groupLogo,
    },
    {
      id: 5,
      img: groupLogo,
    },
    {
      id: 6,
      img: groupLogo,
    },
    {
      id: 7,
      img: groupLogo,
    },
    {
      id: 8,
      img: groupLogo,
    },
    {
      id: 9,
      img: groupLogo,
    },
    {
      id: 10,
      img: groupLogo,
    },
    {
      id: 11,
      img: groupLogo,
    },
    {
      id: 12,
      img: groupLogo,
    },
    {
      id: 13,
      img: groupLogo,
    },
    {
      id: 14,
      img: groupLogo,
    },
    {
      id: 15,
      img: groupLogo,
    },
    {
      id: 16,
      img: groupLogo,
    },
    {
      id: 17,
      img: groupLogo,
    },
    {
      id: 18,
      img: groupLogo,
    },
    {
      id: 19,
      img: groupLogo,
    },
    {
      id: 20,
      img: groupLogo,
    },
  ];
  return (
    <div className="metrics" id="metrics">
      <div className="metrics-header">
        <div className="metrics-header-text">
          <div className="metrics-header-text-flex">
            <img src={logo} alt="STC" className="metrics-logo-main" />
            <h1 className="metrics-header-text-flex-title">
              Students’ Technical Council
            </h1>
          </div>
          <h3 className="metrics-header-text-sub">
            Everything you need to convert, engage, and retain more users.
          </h3>
        </div>
        <div className="metrics-stats">
          <MetricStat number="25+" text="Campus Groups" />
          <div className="metrics-line" />
          <MetricStat number="400+" text="Members" />
          <div className="metrics-line" />
          <MetricStat number="7" text="Inter IIT Gold Medals" />
        </div>
      </div>
      <PrimaryBtn link="/groups" text="View Group Page" type="light" />
      <div className="metrics-logos">
        <MetricsLogoFlex type="large" logos={Logos} startIndex={0} />
        <MetricsLogoFlex type="medium" logos={Logos} startIndex={7} />
        <MetricsLogoFlex type="large" logos={Logos} startIndex={13} />
      </div>
    </div>
  );
};

export default Metrics;
