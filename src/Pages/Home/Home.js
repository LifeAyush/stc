import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import Features from "../../Components/Features/Features";
import Metrics from "../../Components/Metrics/Metrics";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Metrics />
      <Footer />
    </div>
  );
};

export default Home;
