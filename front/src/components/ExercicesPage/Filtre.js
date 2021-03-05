import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Filtre = ({ themeFilterVisibility }) => (
  <>
    <button type="button" className="exercices__filter--btn">Thèmes</button>
    <fieldset className="exercices__filter">
      <legend>Thèmes</legend>
      <div>
        <input type="checkbox" id="coding" name="interest" value="coding" />
        <label htmlFor="coding">Développement</label>
      </div>
      <div>
        <input type="checkbox" id="music" name="interest" value="music" />
        <label htmlFor="music">Musique</label>
      </div>
    </fieldset>
  </>
);

export default Filtre;
