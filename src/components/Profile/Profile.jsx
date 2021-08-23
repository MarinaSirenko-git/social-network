import React from 'react';
import Poster from '../Poster/Poster';
import PostsContainer from '../../containers/PostsContainer';
import AboutUser from '../AboutUser/AboutUser';
import './Profile.css';

function Profile({ profileUserData, userStatus, updateUserStatus }) {
  return (
    <section className="profile">
      <Poster />
      {
        profileUserData
        && (
        <AboutUser
          profileUserData={profileUserData}
          userStatus={userStatus}
          updateUserStatus={updateUserStatus}
        />
        )
      }
      <PostsContainer />
    </section>
  );
}

export default Profile;
