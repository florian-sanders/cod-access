import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const ExercisesList = ({ exercises }) => (
  <ul className="exercises__wrapper__theme__list">
    {exercises.map((exercise) => (
      <li className="exercises__wrapper__theme__list__exercise" key={exercise.id}>
        <Link to={`/challenges/${exercise.id}`} className="exercises__wrapper__theme__list__exercise__link">{exercise.title}</Link>
      </li>
    ))}
  </ul>
);

ExercisesList.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

ExercisesList.defaultProps = {
  exercises: [],
};

export default ExercisesList;
