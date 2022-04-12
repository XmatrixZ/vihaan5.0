import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Team from "../pages/Team"


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default Routers