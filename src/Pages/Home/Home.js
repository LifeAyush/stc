import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import Metrics from "../../Components/Metrics/Metrics";
import HomeEvents from "../../Components/MiniSection/HomeEvents";
import HomeTeam from "../../Components/MiniSection/HomeTeam";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Metrics />
      <HomeEvents />
      <HomeTeam />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
