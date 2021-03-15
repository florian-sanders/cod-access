import React from 'react';
import { Link } from 'react-router-dom';

import diverImgPath from 'src/assets/img/diver.svg';
import radarImgPath from 'src/assets/img/radar.svg';
import spyglassImgPath from 'src/assets/img/spyglass.svg';
import divingSuitImgPath from 'src/assets/img/diving-suit.svg';

import './styles.scss';

const Home = () => (
  <section className="home-wrapper">
    <article className="home-wrapper__article">
      <div className="home-wrapper__article__wrapper">
        <img className="home-wrapper__article__wrapper__img" src={diverImgPath} alt="" />
        <div className="home-wrapper__article__wrapper__text">
          <h1 className="home-wrapper__article__wrapper__text__page-heading">Bienvenue Moussaillon !</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor blandit integer aliquam mi nisi habitasse nunc sit mi.</p>
          <p>Vestibulum ullamcorper nibh sagittis etiam mattis adipiscing velit. Sagittis vivamus amet massa suspendisse nunc euismod.</p>
          <p>Tristique tincidunt vestibulum netus justo. Rhoncus leo massa sed quam. Volutpat gravida vitae faucibus sem nulla molestie consectetur.</p>
        </div>
      </div>
    </article>

    <article className="home-wrapper__article">
      <div className="home-wrapper__article__wrapper">
        <img className="home-wrapper__article__wrapper__img" src={radarImgPath} alt="" />
        <div className="home-wrapper__article__wrapper__text">
          <h2 className="home-wrapper__article__wrapper__text__heading">Lance-toi !</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor blandit integer aliquam mi nisi habitasse nunc sit mi.</p>
          <p>Vestibulum ullamcorper nibh sagittis etiam mattis adipiscing velit. Sagittis vivamus amet massa suspendisse nunc euismod.</p>
          <p>Tristique tincidunt vestibulum netus justo. Rhoncus leo massa sed quam. Volutpat gravida vitae faucibus sem nulla molestie consectetur.</p>
          <Link className="home-wrapper__article__wrapper__text__link" to="/challenges">Commencer les challenges</Link>
        </div>
      </div>
    </article>

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
    </article>

    <article className="home-wrapper__article">
      <div className="home-wrapper__article__wrapper">
        <img className="home-wrapper__article__wrapper__img" src={divingSuitImgPath} alt="" />
        <div className="home-wrapper__article__wrapper__text">
          <h2 className="home-wrapper__article__wrapper__text__heading">Rejoins-nous</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor blandit integer aliquam mi nisi habitasse nunc sit mi.</p>
          <p>Vestibulum ullamcorper nibh sagittis etiam mattis adipiscing velit. Sagittis vivamus amet massa suspendisse nunc euismod.</p>
          <p>Tristique tincidunt vestibulum netus justo. Rhoncus leo massa sed quam. Volutpat gravida vitae faucibus sem nulla molestie consectetur.</p>
          <Link className="home-wrapper__article__wrapper__text__link" to="/inscription">S'inscrire</Link>
        </div>
      </div>
    </article>
  </section>
);

export default Home;
