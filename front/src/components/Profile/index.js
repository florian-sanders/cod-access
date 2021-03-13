import React from 'react';
import ProgressBar from 'src/components/ProgressBar';
import PropTypes from 'prop-types';

import './styles.scss';

const Profile = ({ email, pseudo, picturePath }) => (
  <div className="profile">
    <h1 className="profile__title">Mon Profil</h1>
    <div className="profile__content">
      <img className="profile__content__img" src={`${process.env.IMAGE}${picturePath}`} alt="" />
      <div className="profile__content__infos">
        <h2 className="profile__content__infos__pseudo">Pseudo : {pseudo}</h2>
        <h2 className="profile__content__infos__email">Email : {email}</h2>
      </div>
    </div>
    <ProgressBar />
  </div>
);

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  picturePath: PropTypes.string.isRequired,
};

export default Profile;
