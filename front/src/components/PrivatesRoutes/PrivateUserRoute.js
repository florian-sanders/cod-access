import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateUserRoute = ({ component: Component, isLogged, ...rest }) => (
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  <Route
    {...rest}
    render={(props) => (
      isLogged
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

PrivateUserRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default PrivateUserRoute;
