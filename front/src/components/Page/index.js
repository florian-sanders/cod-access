import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import './styles.scss';
import Home from 'src/components/Home';
import SignUp from 'src/containers/SignUp';
import Profile from 'src/containers/Profile';
import ExercisesPage from 'src/containers/ExercisesPage';
import Exercise from 'src/containers/Exercise';
import Dashboard from 'src/containers/Dashboard';
import Settings from 'src/containers/Settings';
import PrivateRoute from 'src/components/PrivateRoute';

const Page = ({ isLogged }) => (
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
      {/* 
      <PrivateRoute path="/profil-edit" component={Settings} isLogged={isLogged}/>
      </Route>
      {
        isLogged
        && (
          <Route exact path="/parametres">
            <Settings />
          </Route>
        )
      } */}

      <Route exact path="/profil-edit">
        <Settings />
      </Route>
      <Route exact path="/challenges">
        <ExercisesPage />
      </Route>
      <Route exact path="/exercice/:exerciseId">
        <Exercise />
      </Route>
      <Route path="/admin">
        <Dashboard />
      </Route>
    </Switch>
  </main>
);

export default Page;
