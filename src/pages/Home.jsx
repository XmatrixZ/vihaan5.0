import React from "react";
import "./Home.css"
import HeroSection from "../components/ui/HeroSection";
import Influencers from "../components/ui/influencer/Influencer"
import Brands from "../components/ui/Brands/brands";
import ESports from "../components/ui/ESports/ESports";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Influencers />
      <Brands />
      <ESports />
      <Contact />
    </>
  );};

export default Home;

