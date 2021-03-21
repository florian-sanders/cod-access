import React from 'react';
import { Link } from 'react-router-dom';

import diverImgPath from 'src/assets/img/diver.svg';
import radarImgPath from 'src/assets/img/radar.svg';
import spyglassImgPath from 'src/assets/img/spyglass.svg';
import divingSuitImgPath from 'src/assets/img/diving-suit.svg';
import submarineImgPath from 'src/assets/img/submarine.svg';
import sailorImgPath from 'src/assets/img/sailor.svg';

import './styles.scss';

const Home = () => (
  <section className="home-wrapper wave-double-bottom">
    <article className="home-wrapper__article">
      <div className="home-wrapper__article__wrapper">
        <img className="home-wrapper__article__wrapper__img" src={sailorImgPath} alt="" />
        <div className="home-wrapper__article__wrapper__text">
          <h1 className="home-wrapper__article__wrapper__text__page-heading">Bienvenue Moussaillon !</h1>
          <p>Je suis le capitaine Némo. Je suis à la recherche de <strong>développeuses et développeurs</strong> pour résoudre mon problème.</p>
          <p>J'ai commandé un sous-marin Nautilus tout neuf, dernier cri. Dans le cahier des charges, j'avais bien stipulé qu'il fallait que <strong>l'interface et la documentation de ce Nautilus soient totalement accessibles</strong>.</p>
          <p>En effet, plusieurs membres de mon équipage sont en situation de handicap et c'était donc un critère indispensable.</p>
          <p>Malheureusement, le résultat livré semble contenir de nombreux problèmes et je cherche des personnes pour <strong>réparer les interfaces</strong>.</p>
        </div>
      </div>
    </article>

    <article className="home-wrapper__article">
      <div className="home-wrapper__article__wrapper">
        <img className="home-wrapper__article__wrapper__img" src={diverImgPath} alt="" />
        <div className="home-wrapper__article__wrapper__text">
          <h2 className="home-wrapper__article__wrapper__text__heading">Prêt à te jeter à l'eau ?</h2>
          <p>Tu trouveras la <strong>liste des réparations à effectuer</strong> sur la page challenges.</p>
          <p>Les challenges sont triés par thématiques correspondent aux thématiques du <a className="link" href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/">Référentiel Général d'Amélioration d'Accessibilité</a> français.</p>
          <p>Tu peux effectuer les réparations dans <strong>l'ordre que tu le souhaites</strong> et si tu te trompes, n'hésite pas à retenter ta chance !</p>
          <Link className="home-wrapper__article__wrapper__text__link button--primary" to="/challenges">Commencer les challenges</Link>
        </div>
      </div>
    </article>
{/* 
    <article className="home-wrapper__article">
      <div className="home-wrapper__article__wrapper">
        <img className="home-wrapper__article__wrapper__img" src={spyglassImgPath} alt="" />
        <div className="home-wrapper__article__wrapper__text">
          <h2 className="home-wrapper__article__wrapper__text__heading">Etudions un peu !</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor blandit integer aliquam mi nisi habitasse nunc sit mi.</p>
          <p>Vestibulum ullamcorper nibh sagittis etiam mattis adipiscing velit. Sagittis vivamus amet massa suspendisse nunc euismod.</p>
          <p>Tristique tincidunt vestibulum netus justo. Rhoncus leo massa sed quam. Volutpat gravida vitae faucibus sem nulla molestie consectetur.</p>
          <Link className="home-wrapper__article__wrapper__text__link" to="/challenges">Commencer les challenges</Link>
        </div>
      </div>
    </article> */}

    <article className="home-wrapper__article">
      <div className="home-wrapper__article__wrapper">
        <img className="home-wrapper__article__wrapper__img" src={submarineImgPath} alt="" />
        <div className="home-wrapper__article__wrapper__text">
          <h2 className="home-wrapper__article__wrapper__text__heading">Rejoins l'équipage</h2>
          <p>Si tu le souhaites, tu peux t'inscrire pour <strong>visualiser l'avancée</strong> des réparations effectuées et <strong>sauvegarder ta progression</strong>.</p>
          <p>En tant que capitaine, je te certifie que nous n'exploiterons aucune de tes données personnelles et qu'elles ne seront <strong>communiquées à aucun tiers</strong>.</p>
          <Link className="home-wrapper__article__wrapper__text__link button--primary" to="/inscription">S'inscrire</Link>
        </div>
      </div>
    </article>
  </section>
);

export default Home;
