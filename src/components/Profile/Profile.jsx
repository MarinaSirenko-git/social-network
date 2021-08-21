import React from 'react';
import Poster from './../Poster/Poster.jsx';
import PostsContainer from '../../containers/PostsContainer.jsx';
import AboutUser from '../AboutUser/AboutUser.jsx';
import './Profile.css';

function Profile({profileUserData, userStatus, updateUserStatus}) {
  return(
    <section className="profile">
      <Poster />
      {profileUserData && <AboutUser profileUserData={profileUserData} userStatus={userStatus} updateUserStatus={updateUserStatus} />}
      <PostsContainer />
    </section>
  )
}

export default Profile;