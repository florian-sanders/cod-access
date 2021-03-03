import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import FieldGroup from 'src/containers/Connection/FieldGroup';

import './styles.scss';

const SignInForm = ({ trySignIn }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    trySignIn();
  };

  return (
    <>
      <form className="header-wrapper__connection__toggle-area__form" onSubmit={handleSubmit}>
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
    </>
  );
};

SignInForm.propTypes = {
  trySignIn: PropTypes.func.isRequired,
};

export default SignInForm;
