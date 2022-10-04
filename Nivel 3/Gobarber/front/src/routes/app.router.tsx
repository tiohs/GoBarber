import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes>
);

export default AppRouter;
