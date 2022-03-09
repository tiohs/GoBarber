import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/seignin/index';
import SignUp from '../pages/SeignUp/index';
import Dashboard from '../pages/Dashboard';

const Routers: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routers;
