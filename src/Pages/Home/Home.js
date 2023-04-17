import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import Features from "../../Components/Features/Features";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
