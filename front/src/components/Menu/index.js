import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Menu = () => (
  <nav className="header-wrapper__menu header-wrapper__menu" role="navigation" aria-label="principal">
    <ul className="header-wrapper__menu__list">
      <li>
        <NavLink className="header-wrapper__menu__list__link" to="/" exact activeClassName="header-wrapper__menu__list__link--active">
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink className="header-wrapper__menu__list__link" to="/challenges" exact activeClassName="header-wrapper__menu__list__link--active">
          Challenges
        </NavLink>
      </li>
      <li>
        <NavLink className="header-wrapper__menu__list__link" to="/documentations" exact activeClassName="header-wrapper__menu__list__link--active">
          Documentations
        </NavLink>
      </li>
      <li>
        <NavLink className="header-wrapper__menu__list__link" to="/a-propos" exact activeClassName="header-wrapper__menu__list__link--active">
          À propos
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" exact activeClassName="header-wrapper__menu--active">
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Menu;
