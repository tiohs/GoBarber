import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/seignin/index';
import SignUp from '../pages/SeignUp/index';

const Routers: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/SignUp" element={<SignUp />} />
  </Routes>
);

export default Routers;
