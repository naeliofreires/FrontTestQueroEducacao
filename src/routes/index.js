import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dev from '../pages/Dev';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dev" component={Dev} />
    </Switch>
  );
}
