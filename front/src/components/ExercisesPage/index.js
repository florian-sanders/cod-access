import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ExercisesList from './ExercisesList';
import Filter from './Filter';
import CircleLoader from '../CircleLoader'

import './styles.scss';

const ExercisesPage = ({
  fetchThemesExercises,
  allThemesExercises,
  loadingExercisesPage,
  themeFilterVisibility,
  toggleFilter,
  validateFilter,
  themesFilterCheckbox,
  themesIdToDisplay,
  handleCheckbox,
}) => {
  useEffect(() => {
    fetchThemesExercises();
  }, []);
  if (loadingExercisesPage) {
    return (
      <div className="loading">
      <CircleLoader
        colour={"#7ED8F7"}
        radius={100}
        duration={2}
        strokeWidth={20} />
      </div>
    );
  }

  return (
    <section className="exercises">
      <h1 className="title-h1 center">Challenges</h1>
      <div className="exercises__wrapper">
        <Filter
          themes={themesFilterCheckbox}
          visibility={themeFilterVisibility}
          toggleFilter={toggleFilter}
          handleCheckbox={handleCheckbox}
          validateFilter={validateFilter}
        />
        <div className="exercises__wrapper__block-list">
          {
            allThemesExercises.filter(
              (theme) => themesIdToDisplay.includes(theme.id)
            ).map((theme) => (
              <div className="exercises__wrapper__block-list__theme" key={theme.id}>
                <h2 className="exercises__wrapper__block-list__theme__title">{theme.name}</h2>
                <ExercisesList exercises={theme.exercises} color={theme.color} />
              </div>
            ))
          }

        </div>
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
  themesFilterCheckbox: PropTypes.array,
  handleCheckbox: PropTypes.func.isRequired,
  validateFilter: PropTypes.func.isRequired,
  themesIdToDisplay: PropTypes.array.isRequired,
};

ExercisesPage.defaultProps = {
  loadingExercisesPage: false,
  themeFilterVisibility: false,
  themesFilterCheckbox: [],
  allThemesExercises: [],
  toggleFilter: () => {},
};

export default ExercisesPage;
