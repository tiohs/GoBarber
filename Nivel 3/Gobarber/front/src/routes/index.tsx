import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/seignin/index';
import SignUp from '../pages/SeignUp/index';
import Dashboard from '../pages/Dashboard';

import Route from './Route';

const Routers: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routers;
