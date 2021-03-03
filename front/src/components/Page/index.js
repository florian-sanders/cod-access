import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'src/components/Home';
import './styles.scss';

const Page = () => (
  <main id="main-content" role="main" tabIndex="-1">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </main>
);

export default Page;
