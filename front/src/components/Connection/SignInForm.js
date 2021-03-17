import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Message from 'src/containers/Message';
import FieldGroup from 'src/containers/Connection/FieldGroup';

import './styles.scss';

const SignInForm = ({
  trySignIn,
  messageParams,
  checkEmptyField,
  validateInput,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    trySignIn();
  };

  return (
    <>
      <form className="header-wrapper__connection__toggle-area__form" onSubmit={handleSubmit}>
        {
          messageParams.isVisible
          && messageParams.componentToDisplayIn === 'SignInForm'
          && (
            <Message {...messageParams} />
          )
        }
        <FieldGroup
          type="email"
          id="signin-email"
          label="Adresse e-mail (nom@domaine.fr)"
          name="email"
          autocomplete="email"
          isMandatory
          checkEmptyField={checkEmptyField}
          validateInput={validateInput}
        />
        <FieldGroup
          type="password"
          id="signin-password"
          label="Mot de passe"
          name="password"
          autocomplete="current-password"
          checkEmptyField={checkEmptyField}
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
        <Link className="header-wrapper__connection__toggle-area__signup__link" to="/oublie">
          Mot de passe oublié
        </Link>
      </div>
    </>
  );
};

SignInForm.propTypes = {
  trySignIn: PropTypes.func.isRequired,
};

export default SignInForm;
