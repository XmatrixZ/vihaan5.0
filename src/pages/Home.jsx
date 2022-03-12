import React from "react";
// import {Container} from "reactstrap"
import "./Home.css"
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/live-auction/LiveAuction"
import SellerSection from "../components/ui/Seller-section/SellerSection"
const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
    </>
  );};

export default Home;

