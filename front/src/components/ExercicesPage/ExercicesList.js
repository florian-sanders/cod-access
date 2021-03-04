import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const ExercicesList = ({ exercices }) => (
  exercices.map((exercice) => (
    <div className="exercices__wrapper__theme__exercice">
      <Link to="#" className="exercices__wrapper__theme__exercice__link">{exercice.title}</Link>
    </div>
  ))
);

export default ExercicesList;
