import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import ProductSelected from '../components/ProductSelected';

const Routes = () => (
  <Switch>
    <Redirect exact from='/products' to='/' />
    <Route exact path="/" component={Home} />
    <Route path="/products/:code_color+" component={ProductSelected} />
  </Switch>
);

export default Routes;