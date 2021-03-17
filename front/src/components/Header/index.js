import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import logoPath from 'src/assets/img/logo.svg';

const Header = () => (
  <header className="header-wrapper__header" role="banner">
    <Link className="header-wrapper__header__link" to="/">
      <img className="header-wrapper__header__link__site-logo" src={logoPath} alt="Retour à l'accueil" />
      {/* <p className="header-wrapper__header__link__site-name">Cod'Access</p> */}
    </Link>

  </header>
);

export default Header;
