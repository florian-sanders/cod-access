import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <ul className="footer__list">
      <li>
        <Link className="footer__list__link" to="/mentions-legales">
          Mentions légales
        </Link>
      </li>
      <li>
        <Link className="footer__list__link" to="/plan-du-site">
          Plan du site
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
