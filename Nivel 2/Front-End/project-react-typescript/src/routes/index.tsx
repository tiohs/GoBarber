import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const Routers: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/repository/:id" element={<Repository />}/>
  </Routes>
)

export default Routers;