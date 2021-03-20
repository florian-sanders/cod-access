import React, { useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Sitemap = () => (
  <section className="site-map">

    <h1 className="title-h1 center">Plan du site</h1>

    <h2 className="title-h2">Navigation Header</h2>

    <ul>
      <li>
        <Link className="header-wrapper__header__link" to="/">
          <p>Accueil</p>
        </Link>
      </li>
      <li>
        <Link className="header-wrapper__header__link" to="/challenges">
          <p>Challenges</p>
        </Link>
      </li>
      <li>
        <Link className="header-wrapper__header__link" to="/a-propos">
          <p>À propos</p>
        </Link>
      </li>
      <li>
        <Link className="header-wrapper__header__link" to="/contact">
          <p>Contact</p>
        </Link>
      </li>
    </ul>

    <h2 className="title-h2">Gestion du compte</h2>
    <ul>
      <li>
        <Link className="header-wrapper__header__link" to="/oubli-mot-de-passe">
          <p>Mot de passe oublié</p>
        </Link>
      </li>
      <li>
        <Link className="header-wrapper__header__link" to="/inscription">
          <p>Inscription</p>
        </Link>
      </li>
    </ul>

    <h2 className="title-h2">Navigation Footer</h2>
    <ul>
      <li>
        <Link className="header-wrapper__header__link" to="/mentions-legales">
          <p>Mentions légales</p>
        </Link>
      </li>
      <li>
        <Link className="header-wrapper__header__link" to="/plan-du-site">
          <p>Plan du site</p>
        </Link>
      </li>
    </ul>

  </section>
);

export default Sitemap;
