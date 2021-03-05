import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ExercisesList from './ExercisesList';
import Filtre from './Filtre';

import './styles.scss';

const ExercisesPage = ({
  fetchThemesExercises,
  allThemesExercises,
  loadingExercisesPage,
  themeFilterVisibility,
  toggleFilter,
}) => {
  useEffect(() => {
    fetchThemesExercises();
  }, []);

  if (loadingExercisesPage) {
    return (
      <p>Chargement</p>
    );
  }

  return (
    <section className="exercises">
      <h1 className="exercises__title">Choisissez un challenge parmis les thèmes proposés</h1>
      <Filtre
        themes={allThemesExercises}
        visibility={themeFilterVisibility}
        toggleFilter={toggleFilter}
      />
      <div className="exercises__wrapper">
        {allThemesExercises.map((theme) => (
          <div className="exercises__wrapper__theme" key={theme.id}>
            <h2 className="exercises__wrapper__theme__title">{theme.name}</h2>
            <ExercisesList exercises={theme.exercises} />
          </div>
        ))}
      </div>
    </section>
  );
};

ExercisesPage.propTypes = {
  fetchThemesExercises: PropTypes.func.isRequired,
  allThemesExercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      exercises: PropTypes.array,
    }),
  ),
  loadingExercisesPage: PropTypes.bool,
  toggleFilter: PropTypes.func,
  themeFilterVisibility: PropTypes.bool,
};

ExercisesPage.defaultProps = {
  loadingExercisesPage: false,
  themeFilterVisibility: false,
  allThemesExercises: [],
  toggleFilter: () => {},
};

export default ExercisesPage;
