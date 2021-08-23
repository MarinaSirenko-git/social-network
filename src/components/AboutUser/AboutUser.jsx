import React from 'react';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import './AboutUser.css';

function AboutUser({ profileUserData, userStatus, updateUserStatus }) {
  return (
    <div className="about-user">
      <div className="about-user__avatar">
        <img
          className="about-user__img"
          src={profileUserData.photos.large === null || profileUserData.photos === ''
            ? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            : profileUserData.photos.large}
          alt="фото"
        />
      </div>
      <div className="about-user__desc-wrap">
        <span className="about-user__desc about-user__desc_type_name">Han Solo</span>
        <span className="about-user__desc">Frontend-разработчик</span>
      </div>
      <ProfileStatus userStatus={userStatus} updateStatus={updateUserStatus} />
    </div>
  );
}

export default AboutUser;
