import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './styles.scss';

const UserMenu = ({ pseudo, signOut }) => (
  <>
    <p>Bienvenue à bord {pseudo}</p>
    <ul>
      <li>
        <Link to="/profil">Profil</Link>
      </li>
      <li>
        <Link to="/profil-edit">Paramètres</Link>
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
};

export default UserMenu;
