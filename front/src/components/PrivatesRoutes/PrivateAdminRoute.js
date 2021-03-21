import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateAdminRoute = ({
  component: Component, isLogged, role, ...rest
}) => (
  // Show the component only when the user is logged in and admin
  // Otherwise, redirect the user to home page
  <Route
    {...rest}
    render={(props) => (
      isLogged && role === 'admin'
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);

PrivateAdminRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

export default PrivateAdminRoute;
