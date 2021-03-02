import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const SignUp = ({}) => (
  <div className="signup">
    <h1 className="signup__title">Inscription</h1>
    <div className="signup__content">
      <div className="signup__content__illustration" />
      <form action="" method="get" className="signup__content__form">
        <div className="signup__content__form__group">
          <label hmtlFor="email" className="signup__content__form__group__label">Email</label>
          <input type="email" name="email" id="email" className="signup__content__form__group__input" aria-required="true" />
        </div>
        <div className="signup__content__form__group">
          <label hmtlFor="pseudo" className="signup__content__form__group__label">Pseudo</label>
          <input type="text" name="pseudo" id="pseudo" className="signup__content__form__group__input" aria-required="true" />

        </div>
        <div className="signup__content__form__group">
          <label hmtlFor="password" className="signup__content__form__group__label">Mot de passe</label>
          <input type="password" name="password" id="password" className="signup__content__form__group__input" aria-required="true" />
        </div>
        <div className="signup__content__form__group">
          <label hmtlFor="password_confirm" className="signup__content__form__group__label">Confirmez votre mot de passe</label>
          <input type="password" name="password_confirm" id="password_confirm" className="signup__content__form__group__input" aria-required="true" />
        </div>
        <div className="signup__content__form__group">
          <input type="submit" value="S'enregistrer" className="signup__content__form__submit" />
        </div>
      </form>
    </div>
  </div>
);

export default SignUp;
