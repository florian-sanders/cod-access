import React from 'react';
import ExercicesList from './ExercicesList';
import Filtre from './Filtre';
import PropTypes from 'prop-types';

import './styles.scss';

const Exercices = ({}) => (
  <section>
    <Filtre />
    <ExercicesList />
    <ExercicesList />
    <ExercicesList />
  </section>
);

export default Exercices;
