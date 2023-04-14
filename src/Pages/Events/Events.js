import React from "react";
import "./events.css";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";

const Events = () => {
  return (
    <div className="page">
      <Navbar />
      <PageHeading title="Our Events" subTitle="We host many tech events" />
    </div>
  );
};

export default Events;
