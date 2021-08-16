import React from 'react';
import Poster from './../Poster/Poster.jsx';
import PostsContainer from '../../containers/PostsContainer.jsx';
import AboutUser from '../AboutUser/AboutUser.jsx';
import './Profile.css';

function Profile({profileUserData}) {
  return(
    <section className="profile">
      <Poster />
      {profileUserData && <AboutUser profileUserData={profileUserData} />}
      <PostsContainer />
    </section>
  )
}

export default Profile;