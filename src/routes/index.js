import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from '../pages';

const Routers = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routers;
