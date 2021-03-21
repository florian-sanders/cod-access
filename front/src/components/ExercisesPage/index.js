import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import submarineImgPath from 'src/assets/img/submarine.svg';
import ExercisesList from './ExercisesList';
import Filter from './Filter';
import CircleLoader from '../CircleLoader';

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
        <div className="exercises__wrapper__header">
          <div className="exercises__wrapper__header__intro">
            <div className="exercises__wrapper__header__intro__text">
              <p>"Laisse moi me présenter, je suis le capitaine Némo et je suis à la recherche de <strong>développeuses et développeurs</strong> experts en accessibilité web.</p>
              <p className="exercises__wrapper__header__intro__text__paraph">J'ai commandé un sous-marin Nautilus tout neuf dernier cri et dans le cahier des charges j'avais stipulé qu'il fallait que <strong>l'interface et la documentation de ce Nautilus soient totalement accessibles</strong>. En effet, plusieurs membres de mon équipage sont en situation de handicap et c'était donc un critère indispensable.</p>
              <p className="exercises__wrapper__header__intro__text__paraph">Mais malheureusement le résultat livré semble contenir de nombreux problèmes, je cherche donc des experts pour m'aider à <strong>réparer les interfaces</strong> à travers les challenges ci-dessous. Ceux-ci sont triés par thématiques correspondent aux thématiques du <a className="link" href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/">Référentiel Général d'Amélioration d'Accessibilité</a> français.</p>
              <p>Tu peux effectuer les réparations dans <strong>l'ordre que tu le souhaites</strong> et si tu te trompes, n'hésite pas à retenter ta chance !"</p>
            </div>
            <Filter
              themes={themesFilterCheckbox}
              visibility={themeFilterVisibility}
              toggleFilter={toggleFilter}
              handleCheckbox={handleCheckbox}
              validateFilter={validateFilter}
            />
          </div>
          <img className="exercises__wrapper__header__img" src={submarineImgPath} alt="" />
        </div>
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
