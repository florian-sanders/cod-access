import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import Home from 'src/components/Home';
import SignUp from 'src/containers/SignUp';
import Profile from 'src/containers/Profile';
import ExercisesPage from 'src/containers/ExercisesPage';
import Exercise from 'src/containers/Exercise';
import Dashboard from 'src/components/Dashboard';
import About from 'src/components/About';
import Error from 'src/components/Error';
import Contact from 'src/containers/Contact';

import ForgetPage from 'src/containers/ForgetPage';
import NewPasswordPage from 'src/containers/NewPasswordPage';

import Settings from 'src/containers/Settings';
import PrivateUserRoute from 'src/components/PrivatesRoutes/PrivateUserRoute';
import PrivateAdminRoute from 'src/components/PrivatesRoutes/PrivateAdminRoute';

const Page = ({
  isLogged,
  role,
  connectionMenuVisibility,
  closeConnectionMenu,
}) => {
  const location = useLocation();
  useEffect(() => {
    if (connectionMenuVisibility) {
      closeConnectionMenu();
    }
  }, [location]);

  return (
    <main id="main-content" role="main" tabIndex="-1" className="main-content">
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

        <Route exact path="/challenges/:exerciseId">
          <Exercise />
        </Route>

        <PrivateAdminRoute path="/admin" component={Dashboard} isLogged={isLogged} role={role} />

        <Route exact path="/oubli-mot-de-passe">
          <ForgetPage />
        </Route>

        <Route exact path="/forget/:token">
          <NewPasswordPage />
        </Route>


        <Route exact path="/a-propos">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Error />
      </Switch>
    </main>
  );
};

Page.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  closeConnectionMenu: PropTypes.func.isRequired,
  connectionMenuVisibility: PropTypes.bool.isRequired,
};

export default Page;
