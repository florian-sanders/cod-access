import React, { useEffect } from 'react';

import './FieldGroup';
import FieldGroup from 'src/containers/Admin/Exercise/FieldGroup';
import './styles.scss';

const Exercise = ({
  getThemes,
  themes,
  loading,
}) => {
  useEffect(() => {
    getThemes();
  }, []);

  if (loading) {
    return (<p>Chargement en cours</p>);
  }

  return (
    <section className="admin-exercise">
      <h1 className="admin-exercise__heading-page">Créer un exercice</h1>
      <form>
        <section>
          <article className="admin-exercise__general-info">
            <FieldGroup
              className="admin-exercise__general-info__field-group"
              id="exercise-title"
              label="Titre"
              type="text"
              autocomplete="off"
              name="title"
            />

            <FieldGroup
              className="admin-exercise__general-info__field-group"
              id="exercise-intro"
              label="Intro"
              type="textarea"
              autocomplete="off"
              name="brief"
            />

            <fieldset className="admin-exercise__general-info__themes">
              <legend>Thématiques</legend>
              {
                themes.map((theme, index) => (
                  <><input type="checkbox" id={`exercise-theme-${index}`} />
                    <label htmlFor={`exercise-theme-${index}`}>{theme.name}</label></>
                ))
              }
              {
                console.log(themes)
              }
            </fieldset>
          </article>

          {/* <Question /> */}

          <button className="admin-exercise__btn-add" type="button">Ajouter une question supplémentaire</button>
        </section>
        <section className="admin-exercise__submit-publish">
          <button type="button">Annuler</button>
          <button type="submit">Sauvegarder (en brouillon)</button>
          <button type="submit">Publier (en ligne)</button>
        </section>
      </form>
    </section>
  );
};

export default Exercise;
