import React from 'react';
import './styles.scss';
import diverImgPath from 'src/assets/img/diver.svg';
import radarImgPath from 'src/assets/img/radar.svg';
import spyglassImgPath from 'src/assets/img/spyglass.svg';
import divingSuitImgPath from 'src/assets/img/diving-suit.svg';

const About = () => (
  <>
    <section className="about">
      <h1 className="about__description">Id adipisicing Lorem id sunt consectetur in exercitation excepteur eiusmod magna pariatur dolore et. Eiusmod mollit et labore cupidatat nulla pariatur nulla. Velit reprehenderit dolor fugiat exercitation do reprehenderit. Enim veniam exercitation culpa consectetur aliquip sint quis id qui laboris officia aliqua ullamco.</h1>

      <div className="about__members">
        <article className="about__members__team">
          
            <img className="about__members__team__img" src={diverImgPath} alt="photo visage membre1" />
          
          <h2 class="about__members__team__name">Member 1</h2>
          <p class="about__members__team__profil">Ullamco esse enim ex id incididunt aliqua sunt minim magna Lorem reprehenderit Lorem sunt.Sit dolore officia esse nisi.Elit cillum nisi eiusmod eu.</p>
        </article>

        <article className="about__members__team">
          <img className="about__members__team__img" src={radarImgPath} alt="photo visage membre2" />
          <h2 class="about__members__team__name">Member 2</h2>
          <p class="about__members__team__profil">Mollit do in anim exercitation cillum pariatur et commodo exercitation.Enim deserunt commodo sunt proident nostrud officia laboris.</p>
        </article>

        <article className="about__members__team">
          <img className="about__members__team__img" src={spyglassImgPath} alt="photo visage membre3" />
          <h2 class="about__members__team__name">Member 3</h2>
          <p class="about__members__team__profil">Aute exercitation proident veniam ex enim ipsum pariatur ea ad enim. Duis tempor velit sunt elit occaecat quis id quis incididunt minim id ex. Irure dolore veniam deserunt aliquip aliqua qui qui irure officia ipsum ut nulla incididunt.</p>
        </article>

        <article className="about__members__team">
          <img className="about__members__team__img" src={divingSuitImgPath} alt="photo visage membre4" />
          <h2 class="about__members__team__name">Member 4</h2>
          <p class="about__members__team__profil">Nisi anim culpa commodo exercitation laborum dolor aliquip esse exercitation nulla mollit consequat non. Exercitation qui dolore fugiat consectetur dolore nostrud eu. Minim aliquip adipisicing est incididunt nostrud ut. Duis anim ut irure consectetur exercitation minim consectetur irure eiusmod officia non nostrud ad. </p>
        </article>
      </div>
    </section>
  </>
);

export default About;
