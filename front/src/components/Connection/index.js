import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import FieldGroup from 'src/containers/Connection/FieldGroup';
import './styles.scss';

const Connection = ({
  isVisible,
  toggleConnection,
}) => (
  <div className="header-wrapper__connection">
    <button
      className="header-wrapper__connection__toggle-btn"
      type="button"
      aria-expanded={isVisible}
      aria-controls="connection-menu"
      onClick={toggleConnection}
    >
      <FontAwesomeIcon className="header-wrapper__connection__toggle-btn__icon" icon={faUserCircle} size="2x" />
      <span className="header-wrapper__connection__toggle-btn__text">Connexion</span>
    </button>
    <div
      id="connection-menu"
      className={classNames('header-wrapper__connection__toggle-area', {
        'header-wrapper__connection__toggle-area--visible': isVisible,
      })}
    >

      <form className="header-wrapper__connection__toggle-area__form" onSubmit={() => { }}>
        <FieldGroup
          type="email"
          id="signin-email"
          label="Adresse e-mail (nom@domaine.fr)"
          name="email"
          autocomplete="email"
        />
        <FieldGroup
          type="password"
          id="signin-password"
          label="Mot de passe"
          name="password"
          autocomplete="current-password"
        />
        <button
          className="header-wrapper__connection__toggle-area__form__submit"
          type="submit"
        >
          Se connecter
        </button>
      </form>
      <div className="header-wrapper__connection__toggle-area__signup">
        <Link className="header-wrapper__connection__toggle-area__signup__link" to="/inscription">
          Inscription
        </Link>
      </div>
    </div>
  </div>
);

Connection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleConnection: PropTypes.func.isRequired,
};

export default Connection;
