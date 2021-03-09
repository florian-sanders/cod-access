import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import diverImgPath from 'src/assets/img/diver.svg';

import './styles.scss';

const Profile = ({ email, pseudo, checkAuth }) => {
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div className="profile">
      {
        email
          ? (
            <>
              <h1 className="profile__title">Mon Profil</h1>
              <div className="profile__content">
              <img className="profile__content__img" src={diverImgPath} alt="" />
              <div className="profile__content__infos">
                <h2 className="profile__content__infos__pseudo">{pseudo}</h2>
                <h2 className="profile__content__infos__email">{email}</h2>
              </div>
              </div>
            </>
          ) : <p>Veuillez vous connecter</p>
      }

    </div>
  );
};

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  checkAuth: PropTypes.func.isRequired,
  // img: PropTypes.shape({
  //   path: PropTypes.string,
  //   alternative: PropTypes.string,
  // }),
};

Profile.defaultProps = {
  // img: {},
};

export default Profile;
