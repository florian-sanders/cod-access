// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Menu from 'src/components/Menu';
import Connection from 'src/components/Connection';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = () => (
  <>
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
