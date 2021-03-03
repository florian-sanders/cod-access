import React from 'react';
import { Link } from 'react-router-dom';

import FieldGroup from 'src/containers/Connection/FieldGroup';

import './styles.scss';

const SignInForm = ({ }) => (
  <>
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
  </>
);

export default SignInForm;
