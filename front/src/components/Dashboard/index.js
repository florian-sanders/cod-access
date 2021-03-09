import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import UsersList from './UsersList';
import ExercicesList from './ExercisesList';

import './styles.scss';

const Dashboard = ({ role }) => (
  <section className="admin">
    {
      role === 'admin'
        ? (
          <Switch>
            <Route path="/admin/utilisateurs">
              <UsersList />
            </Route>
            <Route path="/admin/exercices">
              <ExercicesList />
            </Route>
          </Switch>
        ) : <p>Vous n'êtes pas autorisé</p>
    }

  </section>
);

Dashboard.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Dashboard;
