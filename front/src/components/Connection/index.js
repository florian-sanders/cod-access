import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import SignInForm from 'src/containers/Connection/SignInForm';
import UserMenu from 'src/containers/Connection/UserMenu';

import './styles.scss';

const Connection = ({
  isVisible,
  toggleConnection,
  isLogged,
}) => (
  <div className="header-wrapper__connection">
    <button
      className="header-wrapper__connection__toggle-btn"
      type="button"
      aria-expanded={isVisible}
      aria-controls="connection-menu"
      onClick={toggleConnection}
    >
      {
        isLogged
          ? (
            <>
              <FontAwesomeIcon className="header-wrapper__connection__toggle-btn__icon" icon={faUserCircle} size="2x" />
              <span className="header-wrapper__connection__toggle-btn__text">Profil</span>
            </>
          )
          : (
            <>
              <FontAwesomeIcon className="header-wrapper__connection__toggle-btn__icon" icon={faUser} size="2x" />
              <span className="header-wrapper__connection__toggle-btn__text">Connexion</span>
            </>
          )
      }

    </button>
    <div
      id="connection-menu"
      className={classNames('header-wrapper__connection__toggle-area', {
        'header-wrapper__connection__toggle-area--visible': isVisible,
      })}
    >
      {
        isLogged
          ? <UserMenu />
          : <SignInForm />
      }


    </div>
  </div>
);

Connection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleConnection: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Connection;
