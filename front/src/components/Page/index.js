import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import Home from 'src/components/Home';
import SignUp from 'src/containers/SignUp';
import Profile from 'src/containers/Profile';
import ExercisesPage from 'src/containers/ExercisesPage';
import Exercise from 'src/containers/Exercise';
import Dashboard from 'src/components/Dashboard';
import ExerciseManager from 'src/containers/ExerciseManager';

import ForgetPage from 'src/containers/ForgetPage';
import NewPasswordPage from 'src/containers/NewPasswordPage';

import Settings from 'src/containers/Settings';
import PrivateUserRoute from 'src/components/PrivatesRoutes/PrivateUserRoute';
import PrivateAdminRoute from 'src/components/PrivatesRoutes/PrivateAdminRoute';

const Page = ({ isLogged, role }) => (
  <main id="main-content" role="main" tabIndex="-1">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/inscription">
        <SignUp />
      </Route>

      <PrivateUserRoute path="/profil" component={Profile} isLogged={isLogged} />

      <PrivateUserRoute path="/profil-edit" component={Settings} isLogged={isLogged} />

      <Route exact path="/challenges">
        <ExercisesPage />
      </Route>

      <Route exact path="/exercice/:exerciseId">
        <Exercise />
      </Route>

      <PrivateAdminRoute path="/admin" component={Dashboard} isLogged={isLogged} role={role} />

      <PrivateAdminRoute exact path="admin/creer-exercice" component={ExerciseManager} isLogged={isLogged} role={role} />

      <Route exact path="/oublie">
        <ForgetPage />
      </Route>

      <Route exact path="/forget/:token">
        <NewPasswordPage />
      </Route>
    </Switch>
  </main>
);

Page.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

export default Page;
