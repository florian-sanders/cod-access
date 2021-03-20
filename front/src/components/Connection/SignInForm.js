import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Message from 'src/containers/Message';
import FieldGroup from 'src/containers/Connection/FieldGroup';
import CircleLoader from 'src/components/CircleLoader';

import './styles.scss';

const SignInForm = ({
  trySignIn,
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
  messageParams: PropTypes.shape({
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    componentToDisplayIn: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
  }).isRequired,
  checkEmptyField: PropTypes.func.isRequired,
  validateInput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SignInForm;
