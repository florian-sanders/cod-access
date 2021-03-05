import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ExercisesList from './ExercisesList';
import Filter from './Filter';

import './styles.scss';

const ExercisesPage = ({
  fetchThemesExercises,
  allThemesExercises,
  loadingExercisesPage,
  themeFilterVisibility,
  toggleFilter,
  themesFilter,
  setThemesFilter,
}) => {
  useEffect(() => {
    fetchThemesExercises();
  }, []);

  if (loadingExercisesPage) {
    return (
      <p>Chargement</p>
    );
  }

  const themesToDisplay = themesFilter.filter((theme) => (theme.checked));

  const themesGood = allThemesExercises.map((themeD) => themesToDisplay.filter((theme) => (theme.id === themeD.id)))

  console.log('themesGood',themesGood);

  return (
    <section className="exercises">
      <h1 className="exercises__title">Choisissez un challenge parmis les thèmes proposés</h1>
      <Filter
        themes={themesFilter}
        visibility={themeFilterVisibility}
        toggleFilter={toggleFilter}
        setThemesFilter={setThemesFilter}
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
  themesFilter: PropTypes.array,
  setThemesFilter: PropTypes.func.isRequired,
};

ExercisesPage.defaultProps = {
  loadingExercisesPage: false,
  themeFilterVisibility: false,
  themesFilter: [],
  allThemesExercises: [],
  toggleFilter: () => {},
};

export default ExercisesPage;
