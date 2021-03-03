import React from 'react';

import FieldGroup from './FieldGroup';
import './styles.scss';

const Connection = () => (
  <div className="header-wrapper__connection">
    <button
      className="header-wrapper__connection__toggle-btn"
      type="button"
      aria-expanded="false"
      aria-controls="connection-menu"
    >
      Connexion
    </button>
    <div id="connection-menu" className="header-wrapper__connection__toggle-area">
      <form className="header-wrapper__connection__toggle-area__form" onSubmit={() => { }}>
        <FieldGroup
          type="email"
          id="signin-email"
          value=""
          label="Adresse e-mail (nom@domaine.fr)"
          name="signinEmail"
        />
        <FieldGroup
          type="password"
          id="signin-password"
          value=""
          label="Mot de passe"
          name="signinPassword"
        />
        <button
          className="header-wrapper__connection__toggle-area__form__submit"
          type="submit"
        >
          Se connecter
        </button>
      </form>
    </div>
  </div>
);

export default Connection;
