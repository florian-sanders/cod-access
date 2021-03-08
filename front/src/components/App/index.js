// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Menu from 'src/containers/Menu';
import Connection from 'src/containers/Connection';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = ({ checkAuth }) => {
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <a className="skip-link sr-only-focusable" href="#main-content">Contenu</a> {/* skipLink for a11y, keyboard users mainly */}
      <div className="header-wrapper">
        <Header />
        <Menu />
        <Connection />
      </div>
      <Page />
      <Footer />
    </>
  );
};

App.propTypes = {
  checkAuth: PropTypes.func.isRequired,
};

// == Export
export default App;
