import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './styles.scss';

const Pagination = ({ totalPages, activePage }) => {
  const pageLinks = [];

  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(
      <li key={i}>
        <NavLink
          className={classNames('pagination__link',
            { 'pagination__link--active': i === activePage })}
          to={`/admin/exercices?page=${i}`}
        >
          {i}
        </NavLink>
      </li>,
    );
  }

  return (
    <nav role="navigation" aria-label="pagination">
      <ul className="pagination">
        {pageLinks}
      </ul>
    </nav>
  );
};

export default Pagination;
