import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SignIn from '../pages/seignin/index';
import SignUp from '../pages/SeignUp/index';

const AuthRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AuthRouter;
