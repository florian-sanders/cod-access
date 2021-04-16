import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Message from 'src/containers/Message';
import CircleLoader from 'src/components/CircleLoader';
import FieldGroup from './FieldGroup';

import './styles.scss';

const SignInForm = ({
  trySignIn,
  changeValue,
  email,
  password,
  messageParams,
  checkEmptyField,
  validateInput,
  loading,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    trySignIn();
  };

  return (
    <>
      <form className="header-wrapper__connection__toggle-area__form" onSubmit={handleSubmit}>
        {
          messageParams.targetComponent === 'SignInForm'
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
          value={email.value}
          message={email.controlMessage}
          changeValue={changeValue}
          checkEmptyField={checkEmptyField}
          validateInput={validateInput}
        />
        <FieldGroup
          type="password"
          id="signin-password"
          label="Mot de passe"
          name="password"
          autocomplete="current-password"
          value={password.value}
          message={password.controlMessage}
          changeValue={changeValue}
          checkEmptyField={checkEmptyField}
        />
        <Link className="header-wrapper__connection__toggle-area__form__link" to="/oubli-mot-de-passe">
          Mot de passe oublié
        </Link>
        <button
          className="button--secondary header-wrapper__connection__toggle-area__form__submit"
          type="submit"
        >
          <span className="">Se connecter</span>
          {
            loading && (
              <CircleLoader
                colour="#7ED8F7"
                radius={8}
                duration={2}
                strokeWidth={3}
              />
            )
          }
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
  changeValue: PropTypes.func.isRequired,
  email: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  password: PropTypes.shape({
    value: PropTypes.string.isRequired,
    controlMessage: PropTypes.string.isRequired,
  }).isRequired,
  messageParams: PropTypes.shape({
    targetComponent: PropTypes.string.isRequired,
  }).isRequired,
  checkEmptyField: PropTypes.func.isRequired,
  validateInput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SignInForm;
