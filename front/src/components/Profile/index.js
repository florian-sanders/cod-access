import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from './ProgressBar';

import './styles.scss';

const Profile = ({
  email, pseudo, picturePath, progressByTheme, fetchProgressByTheme,
}) => {
  useEffect(() => {
    fetchProgressByTheme();
  }, []);

  return (
    <div className="profile">
      <h1 className="title-h1 center">Mon Profil</h1>
      <div className="wrapper">
        <div className="profile__content">
          <img className="profile__content__img" src={`${process.env.IMAGE}${picturePath}`} alt="" />
          <div className="profile__content__infos">
            <h2 className="profile__content__infos__pseudo">Pseudo : {pseudo}</h2>
            <h2 className="profile__content__infos__email">Email : {email}</h2>
          </div>
        </div>
        <div className="profile__progress">
          {
            progressByTheme.map((progress) => (
              <div key={progress.theme} className="profile__progress__theme">
                <div className="profile__progress__theme__header">
                  <h2 className="profile__progress__theme__header__title">{progress.theme}</h2>
                  {
                    progress.progress === 100 && <FontAwesomeIcon icon={faTrophy} size="2x" />
                  }
                </div>
                <ProgressBar color={progress.color} percentage={`${progress.progress}%`} />
              </div>
            ))
          }
        </div>
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
