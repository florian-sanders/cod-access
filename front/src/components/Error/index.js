import React, { useEffect } from 'react';
import './styles.scss';

const Error = () => {
  useEffect(() => {
    document.title = 'Page non trouvée -  Cod\'Access';
  });

  return (
    <div className="error-page wave-double-bottom">
      <h1 className="error-heading">Page non trouvée</h1>
      <p className="error-text">Désolé, cette page n'existe pas.</p>
    </div>
  );
};

export default Error;
