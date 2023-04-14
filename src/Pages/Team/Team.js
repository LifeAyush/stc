import React from "react";
import "./team.css";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";

const Team = () => {
  return (
    <div className="page">
      <Navbar />
      <PageHeading title="Our Team" subTitle="We host many tech events" />
    </div>
  );
};

export default Team;
