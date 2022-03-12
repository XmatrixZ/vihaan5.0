import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import SellerProfile from "../pages/SellerProfile";
import EditProfile from "../pages/EditProfile";
import Wallet from "../pages/Wallet";
import NftDetails from "../pages/NftDetails";

const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/market" elements={<Market />} />
        <Route path="/create" elements={<Create />} />
        <Route path="/contact" elements={<Contact />} />
        <Route path="/edit-profile" elements={<EditProfile />} />
        <Route path="/seller-profile" elements={<SellerProfile />} />
        <Route path="/wallet" elements={<Wallet />} />
        <Route path="/market/:id" elements={<NftDetails />} />
      </Routes>
  );
}

export default Routers