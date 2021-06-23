import React, { useEffect } from 'react';
import ErrorPage from 'src/assets/img/404.svg';
import './styles.scss';

const Error = () => {
  useEffect(() => {
    document.title = 'Page non trouvée -  Cod\'Access';
  });

  return (
    <div className="errorPage">
      <img className="errorPage__picture" src={ErrorPage} alt="page non trouvée" />
    </div>
  );
};

export default Error;
