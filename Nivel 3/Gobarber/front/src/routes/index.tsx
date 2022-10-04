import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import AppRouter from './app.router';
import AuthRouter from './auth.router';

const Routers: React.FC = () => {
  const { user } = useAuth();

  return <BrowserRouter>{user ? <AppRouter /> : <AuthRouter />}</BrowserRouter>;
};

export default Routers;
