import React from "react";
import "./groups.css";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";

const Groups = () => {
  return (
    <div className="page">
      <Navbar />
      <PageHeading
        title="Campus Groups"
        subTitle="These are workspaces of tech at IITR"
      />
    </div>
  );
};

export default Groups;
