// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Menu from 'src/containers/Menu';
import Connection from 'src/containers/Connection';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = () => (
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

// == Export
export default App;
