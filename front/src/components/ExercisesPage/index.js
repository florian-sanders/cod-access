import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import submarineImgPath from 'src/assets/img/fix_bug.svg';
import ExercisesList from './ExercisesList';
import Filter from './Filter';
import CircleLoader from '../CircleLoader';

import './styles.scss';

const ExercisesPage = ({
  fetchThemesExercises,
  allExercises,
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
    document.title = 'Challenges - Cod\'Access';
  }, []);
  if (loadingExercisesPage) {
    return (
      <div className="loading">
        <CircleLoader
          colour="#7ED8F7"
          radius={100}
          duration={2}
          strokeWidth={20}
        />
      </div>
    );
  }

  return (
    <section className="exercises wave-double-bottom">
      <h1 className="title-h1 center">Challenges</h1>
      <div className="exercises__wrapper">
        <div className="exercises__wrapper__intro">
          <div className="exercises__wrapper__intro__text">
            <p>Tu trouveras ci-dessous les réparations à effectuer pour rendre les interfaces du Nautilus accessibles.</p>
            <p>Tu peux effectuer les réparations dans <strong>l'ordre que tu le souhaites</strong> et si tu te trompes, n'hésite pas à retenter ta chance&nbsp;!</p>
          </div>
          <img className="exercises__wrapper__img" src={submarineImgPath} alt="" width="350" />
        </div>
        <Filter
          themes={themesFilterCheckbox}
          visibility={themeFilterVisibility}
          toggleFilter={toggleFilter}
          handleCheckbox={handleCheckbox}
          validateFilter={validateFilter}
        />
        <div className="exercises__wrapper__block-list">
          <ExercisesList exercises={allExercises.filter((exercise) => exercise.themes.some(
            (theme) => themesIdToDisplay.includes(theme.id),
          ))}
          />
        </div>
      </div>
    </section>
  );
};

ExercisesPage.propTypes = {
  fetchThemesExercises: PropTypes.func.isRequired,
  allExercises: PropTypes.array,
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
  allExercises: [],
  toggleFilter: () => { },
};

export default ExercisesPage;
