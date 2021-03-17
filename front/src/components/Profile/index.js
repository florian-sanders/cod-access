import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

import './styles.scss';

const Profile = ({
  email, pseudo, picturePath, progressByTheme, fetchProgressByTheme,
}) => {
  useEffect(() => {
    fetchProgressByTheme();
  }, []);
console.log(progressByTheme)
  return (
    <div className="profile">
      <h1 className="title-h1">Mon Profil</h1>
      <div className="profile__content">
        <img className="profile__content__img" src={`${process.env.IMAGE}${picturePath}`} alt="" />
        <div className="profile__content__infos">
          <h2 className="profile__content__infos__pseudo title-h2">Pseudo : {pseudo}</h2>
          <h2 className="profile__content__infos__email title-h2">Email : {email}</h2>
        </div>
      </div>
      <div className="profile__progress">
        {
          progressByTheme.map((progress) => (
            <div key={progress.theme} className="profile__progress__theme">
              <h2 className="title-h2">{progress.theme}</h2>
              <ProgressBar color={progress.color} percentage={`${progress.progress}%`} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  picturePath: PropTypes.string.isRequired,
  progressByTheme: PropTypes.array,
  fetchProgressByTheme: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  progressByTheme: [],
};

export default Profile;
