import React from 'react';
import './styles.scss';
import diverImgPath from 'src/assets/img/diver.svg';
import radarImgPath from 'src/assets/img/radar.svg';
import fred from 'src/assets/img/fred.jpg';
import jerem from 'src/assets/img/jerem.jpg';
import annekim from 'src/assets/img/anne-kim.jpg';

const About = () => (
  <>
    <section className="about">
      <h1 className="title-h1 center">À propos</h1>
      <p className="about__description">Toi aussi tu te demande qui à pu réalisé ce super site à l'aide de Réact, NodeJS, express... en seulement 1 mois et bien voici une petite présentation de l'équipage: </p>
      <div className="about__members">

        <article className="about__members__team">
          <div className="about__members__team__imageLeft">
            <img className="about__members__team__img" src={annekim} alt="photo visage membre1" />
            </div>
            <div className="about__members__team__texte">  
          <p className="about__members__team__name">Anne-Kim<br></br>BANCHEREAU</p>
          <p className="about__members__team__profil">Scrum Master,<br></br>Développeuse Front</p>
          </div>
        </article>

        <article className="about__members__team">
        <div className="about__members__team__imageRight">
          <img className="about__members__team__img" src={radarImgPath} alt="photo visage membre2" />
          </div>
          <div className="about__members__team__texte"> 
          <h2 className="about__members__team__name">Florian<br></br>SANDERS</h2>
          <p className="about__members__team__profil">Product Owner,<br></br>Lead Dev Front</p>
          </div>
        </article>

        <article className="about__members__team">
        <div className="about__members__team__imageLeft">
          <img className="about__members__team__img" src={fred} alt="photo visage membre3" />
          </div>
          <div className="about__members__team__texte"> 
          <h2 className="about__members__team__name">Frédéric<br></br>BOURIGEAUD</h2>
          <p className="about__members__team__profil">Lead Dev Back</p>
          </div>
        </article>

        <article className="about__members__team">
        <div className="about__members__team__imageRight">
          <img className="about__members__team__img" src={jerem} alt="photo visage membre4" />
          </div>
          <div className="about__members__team__texte"> 
          <h2 className="about__members__team__name">Jérémy<br></br>YVON</h2>
          <p className="about__members__team__profil">Git Master,<br></br>Développeur Back</p>
          </div>
        </article>
      </div>
    </section>
  </>
);

export default About;
