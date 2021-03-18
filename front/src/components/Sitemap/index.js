import React, { useImperativeHandle } from 'react';

import './styles.scss';

const Sitemap = () => (
  <section className="Sitemap">

    <h1 className="Sitemap__title">Plan du site</h1>

    <h2 className="Sitemap__subTitle">Navigation Header</h2>

    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/challenges">Challenges</a></li>
      <li><a href="/a-propos">À propos</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>

    <h2 className="Sitemap__subTitle">Gestion du compte</h2>
    <ul>
      <li><a href="/oubli-mot-de-passe">Mot de passe oublié</a></li>
      <li><a href="/inscription">Inscription</a></li>
    </ul>

    <h2 className="Sitemap__subTitle">Navigation Footer</h2>
    <ul>
      <li><a href="/mentions-legales">Mentions légales</a></li>
      <li><a href="/plan-du-site">Plan du site</a></li>
    </ul>

  </section>
);

export default Sitemap;
