import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Profile = ({ email, pseudo }) => (
  <div className="profile">
    <h1 className="profile__title">Mon Profil</h1>
    <div className="profile__content">
      <img className="profile__content__img" src="" alt="" />
      <div className="profile__content__infos">
        <h2 className="profile__content__infos__pseudo">{pseudo}</h2>
        <h2 className="profile__content__infos__email">{email}</h2>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  // img: PropTypes.shape({
  //   path: PropTypes.string,
  //   alternative: PropTypes.string,
  // }),
};

Profile.defaultProps = {
  // img: {},
};

export default Profile;
