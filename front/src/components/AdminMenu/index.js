import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const AdminMenu = ({ }) => (
  <div className="nav__menu">
  <nav role="navigation" aria-label="admin">
    <ul className="admin__menu">
      <p className="title-h2">Dashboard</p>
      <li>
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
        <NavLink className="admin__menu__link" to="/admin/utilisateurs" exact activeClassName="admin__menu__link--active">
          Utilisateurs
        </NavLink>
      </li>
      <li>
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
        <NavLink className="admin__menu__link" to="/admin/exercices" exact activeClassName="admin__menu__link--active">
          Exercices
        </NavLink>
      </li>
      <li>
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
        <NavLink className="admin__menu__link" to="/admin/creer-exercice" exact activeClassName="admin__menu__link--active">
          Créer un exercice
        </NavLink>
      </li>
    </ul>
  </nav>
  </div>
);

export default AdminMenu;
