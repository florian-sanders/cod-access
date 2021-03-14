import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import AdminMenu from 'src/components/AdminMenu';
import AdminUsersList from 'src/containers/AdminUsersList';
import ExerciseManager from 'src/containers/ExerciseManager';
import AdminExercicesList from 'src/containers/AdminExercisesList';


import './styles.scss';

const Dashboard = () => (
  <>
    <section className="admin">
      <AdminMenu />
      <Switch>
        <Route exact path="/admin/utilisateurs">
          <AdminUsersList />
        </Route>
        <Route exact path="/admin/exercices">
          <AdminExercicesList />
        </Route>
        <Route path="/admin/creer-exercice">
          <ExerciseManager />
        </Route>
      </Switch>
    </section>
  </>
);

export default Dashboard;
