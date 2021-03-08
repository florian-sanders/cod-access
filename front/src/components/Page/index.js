import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'src/components/Home';
import SignUp from 'src/containers/SignUp';
import Profile from 'src/containers/Profile';
import './styles.scss';
import ExercisesPage from 'src/containers/ExercisesPage';
import Exercise from 'src/containers/Exercise';

const Page = () => (
  <main id="main-content" role="main" tabIndex="-1">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/inscription">
        <SignUp />
      </Route>
      <Route exact path="/profil">
        <Profile />
      </Route>
      <Route exact path="/challenges">
        <ExercisesPage />
      </Route>
      <Route exact path="/exercice/:exerciseId">
        <Exercise />
      </Route>
    </Switch>
  </main>
);

export default Page;
