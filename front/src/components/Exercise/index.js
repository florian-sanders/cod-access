import React from 'react';

import Question from './Question';
import './styles.scss';

const Exercise = ({ exercise: { title, brief, questions } }) => (
  <section className="exercise-section">
    <h1 className="exercise-section__page-heading">{title}</h1>
    <p className="exercise-section__brief">{brief}</p>
    <Question question={questions[0]} />
  </section>
);

export default Exercise;
