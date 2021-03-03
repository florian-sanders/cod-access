import React from 'react';
import Proptypes from 'prop-types';
import FieldGroup from './FieldGroup';

import './styles.scss';

const SignUp = ({
  changeField, email, pseudo, password, passwordConfirm,
}) => (
  <div className="signup">
    <h1 className="signup__title">Inscription</h1>
    <div className="signup__content">
      <div className="signup__content__illustration" />
      <form action="" method="get" className="signup__content__form">
        <FieldGroup
          type="email"
          id="email"
          value={email}
          label="Adresse e-mail (nom@domaine.fr)"
          name="email"
          onChange={changeField}
        />
        <FieldGroup
          type="text"
          id="pseudo"
          value={pseudo}
          label="Pseudo"
          name="pseudo"
          onChange={changeField}
        />
        <FieldGroup
          type="password"
          id="password"
          value={password}
          label="Mot de passe"
          name="password"
          onChange={changeField}
        />
        <FieldGroup
          type="password"
          id="password_confirm"
          value={passwordConfirm}
          label="Confirmez votre mot de passe"
          name="passwordConfirm"
          onChange={changeField}
        />
        <div className="signup__content__form__group">
          <button
            className="signup__content__form__submit"
            type="submit"
          >
            S'enregistrer
          </button>
        </div>
      </form>
    </div>
  </div>
);

SignUp.propTypes = {
  email: Proptypes.string.isRequired,
  pseudo: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
  passwordConfirm: Proptypes.string.isRequired,
  changeField: Proptypes.func,
};

SignUp.defaultProps = {
  changeField: () => {},
};

export default SignUp;
