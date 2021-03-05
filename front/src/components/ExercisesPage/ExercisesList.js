import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const ExercisesList = ({ exercises }) => (
  exercises.map((exercise) => (
    <div className="exercises__wrapper__theme__exercise" key={exercise.id}>
      <Link to="#" className="exercises__wrapper__theme__exercise__link">{exercise.title}</Link>
    </div>
  ))
);

ExercisesList.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

ExercisesList.defaultProps = {
  exercise: {},
};

export default ExercisesList;
