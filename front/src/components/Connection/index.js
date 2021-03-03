import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import SignInForm from './SignInForm';

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
      <SignInForm />
    </div>
  </div>
);

Connection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleConnection: PropTypes.func.isRequired,
};

export default Connection;
