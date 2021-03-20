import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faFileAlt, faTools } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const AdminMenu = () => (
  <div className="nav__menu">
    <nav role="navigation" aria-label="admin">
      <ul className="admin__menu">
        <p className="title-h2 admin__menu__title hidden-mobile">Tableau de bord</p>
        <li>
          <NavLink className="admin__menu__link__flex" to="/admin/utilisateurs" exact activeClassName="admin__menu__link__flex--active">
            <div className="admin__menu__link__flex__icon">
              <FontAwesomeIcon className="admin__menu__link__flex__icon__svg" size="2x" icon={faUserCircle} />
            </div>
            <p className="admin__menu__link__flex__text hidden-mobile">Utilisateurs</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="admin__menu__link__flex" to="/admin/exercices" exact activeClassName="admin__menu__link__flex--active">
            <div className="admin__menu__link__flex__icon">
              <FontAwesomeIcon className="admin__menu__link__flex__icon__svg" size="2x" icon={faFileAlt} />
            </div>
            <p className="admin__menu__link__flex__text hidden-mobile">Exercices</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="admin__menu__link__flex" to="/admin/creer-exercice" exact activeClassName="admin__menu__link__flex--active">
            <div className="admin__menu__link__flex__icon">
              <FontAwesomeIcon className="admin__menu__link__flex__icon__svg" size="2x" icon={faTools} />
            </div>
            <p className="admin__menu__link__flex__text hidden-mobile">Créer un exercice</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default AdminMenu;
