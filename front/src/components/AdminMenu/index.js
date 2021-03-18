import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faFileAlt, faTools } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const AdminMenu = ({ }) => (
  <div className="nav__menu">
  <nav role="navigation" aria-label="admin">
    <ul className="admin__menu">
      <p className="title-h2 admin__menu hidden-mobile" >Dashboard</p>
      <li>
        <NavLink className="admin__menu__link" to="/admin/utilisateurs" exact activeClassName="admin__menu__link--active">
         <FontAwesomeIcon icon={faUserCircle} size="2x" /> 
         <p className="hidden-mobile">Utilisateurs</p>
        </NavLink>
      </li>
      <li>
        <NavLink className="admin__menu__link" to="/admin/exercices" exact activeClassName="admin__menu__link--active">
         <FontAwesomeIcon icon={faFileAlt} size="2x" />
         <p className="hidden-mobile">Exercices</p>
        </NavLink>
      </li>
      <li>
        <NavLink className="admin__menu__link" to="/admin/creer-exercice" exact activeClassName="admin__menu__link--active">
         <FontAwesomeIcon icon={faTools} size="2x" />
         <p className="hidden-mobile">Créer un exercice</p>
        </NavLink>
      </li>
    </ul>
  </nav>
  </div>
);

export default AdminMenu;
