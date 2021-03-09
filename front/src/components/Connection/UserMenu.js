import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './styles.scss';

const UserMenu = ({ pseudo, signOut, role }) => (
  <>
    <p className="header-wrapper__connection__toggle-area__title">Bienvenue à bord {pseudo}</p>
    <ul className="header-wrapper__connection__toggle-area__list">
      <li>
        <NavLink to="/profil" exact className="header-wrapper__connection__toggle-area__list__link" activeClassName="header-wrapper__connection__toggle-area__list__link--active">Profil</NavLink>
      </li>
      {
        role === 'admin'
        && (
          <li className="header-wrapper__connection__toggle-area__list__link">
            <NavLink to="/admin/utilisateurs" exact className="header-wrapper__connection__toggle-area__list__link" activeClassName="header-wrapper__connection__toggle-area__list__link--active">Tableau de bord</NavLink>
          </li>
        )
      }
      <li>
        <NavLink to="/profil-edit" exact className="header-wrapper__connection__toggle-area__list__link" activeClassName="header-wrapper__connection__toggle-area__list__link--active">Paramètres</NavLink>
      </li>
      <li>
        <button type="button" onClick={signOut}>
          Déconnexion
        </button>
      </li>
    </ul>
  </>
);

UserMenu.propTypes = {
  pseudo: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};

export default UserMenu;
