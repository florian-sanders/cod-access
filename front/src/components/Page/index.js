import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'src/components/Home';
import SignUp from 'src/containers/SignUp';
import Profile from 'src/components/Profile';
import './styles.scss';
import ExercisesPage from 'src/containers/ExercisesPage';
<<<<<<< HEAD
import Exercise from 'src/containers/Exercise';
=======
>>>>>>> develop

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
<<<<<<< HEAD
      </Route>
      <Route exact path="/exercice/:exerciseId">
        <Exercise />
=======
>>>>>>> develop
      </Route>
    </Switch>
  </main>
);

export default Page;
