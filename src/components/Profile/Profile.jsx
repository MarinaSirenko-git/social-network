import React from 'react';
import Poster from './../Poster/Poster.jsx';
import PostsContainer from '../../containers/PostsContainer.jsx';
import AboutUser from '../AboutUser/AboutUser.jsx';
import './Profile.css';

function Profile({ store }) {
  return(
    <section className="profile">
      <Poster />
      <AboutUser />
      <PostsContainer store={store} />
    </section>
  )
}

export default Profile;