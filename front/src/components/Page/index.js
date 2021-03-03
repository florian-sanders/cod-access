import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'src/components/Home';
import SignUp from 'src/containers/SignUp';
import './styles.scss';

const Page = () => (
  <main id="main-content" role="main" tabIndex="-1">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/inscription">
        <SignUp />
      </Route>
    </Switch>
  </main>
);

export default Page;
