import React, { useEffect } from 'react';
import ExercicesList from './ExercicesList';
import Filtre from './Filtre';
import PropTypes from 'prop-types';

import './styles.scss';

const themesData = [
  {
    id: 1,
    name: 'image',
    color: '#fof',
    exercices: [
      {
        id: 1,
        type: 'quiz',
        title: 'les formulaires',
        brief: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. `,
        published: true,
      },
      {
        id: 1,
        type: 'quiz',
        title: 'les balises alt',
        brief: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        published: true,
      },
    ]
  },
  {
    id: 2,
    name: 'navigation',
    color: '#fof',
    exercices: [
      {
        id: 3,
        type: 'quiz',
        title: 'le menu',
        brief: `Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo1) est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. `,
        published: true,
      },
    ],
  },
];

const ExercicesPage = ({ fetchThemesExercices, allThemesExercices, loading }) => {
  useEffect(() => {
    fetchThemesExercices();
  }, []);

  return (
    // { loading ? 'chargement' : 'S\'enregistrer' }
    <section className="exercices">
      <h1 className="exercices__title">Choisissez un challenge parmis les thèmes proposés</h1>
      <Filtre />
      <div className="exercices__wrapper">
        {themesData.map((theme) => (
          <div className="exercices__wrapper__theme">
            <h2 className="exercices__wrapper__theme__title">{theme.name}</h2>
            <ExercicesList key={theme.id} exercices={theme.exercices} />
          </div>
        ))}
      </div>
    </section>
  );
};

ExercicesPage.propTypes = {
  fetchThemesExercices: PropTypes.func.isRequired,
  allThemesExercices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      exercices: PropTypes.array,
    }),
  ).isRequired,
  loading: PropTypes.bool,
};

ExercicesPage.defaultProps = {
  loading: false,
};

export default ExercicesPage;
