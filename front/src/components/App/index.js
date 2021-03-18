// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Menu from 'src/containers/Menu';
import Connection from 'src/containers/Connection';
import Page from 'src/containers/Page';
import Footer from 'src/components/Footer';
import CircleLoader from '../CircleLoader'
import './styles.scss';

// == Composant
const App = ({ checkAuth, getCSRFToken, loadThemes, appLoading }) => {
  useEffect(() => {
    loadThemes();
    getCSRFToken();
    if (localStorage.getItem('isSignedIn')) {
      checkAuth();
    }
  }, []);
  console.log('loader', appLoading);
  return (
    <>
      <a className="skip-link sr-only-focusable" href="#main-content">Contenu</a> {/* skipLink for a11y, keyboard users mainly */}
      <div className="header-wrapper">
        <Header />
        <Menu />
        <Connection />
      </div>
      {
        appLoading ? 
        <div className="loading">
        <CircleLoader
          colour={"#7ED8F7"}
          radius={100}
          duration={2}
          strokeWidth={20} />
        </div>
        : <Page />
      }
      <Footer />
    </>
  );
};

App.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  getCSRFToken: PropTypes.func.isRequired,
  loadThemes: PropTypes.func.isRequired,
};

// == Export
export default App;
