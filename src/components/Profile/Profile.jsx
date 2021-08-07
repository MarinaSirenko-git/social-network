import React from 'react';
import Poster from './../Poster/Poster.jsx';
import Posts from '../Posts/Posts.jsx';
import AboutUser from '../AboutUser/AboutUser.jsx';
import './Profile.css';

function Profile({ posts, dispatch, newPostText }) {
  return(
    <section className="profile">
      <Poster />
      <AboutUser />
      <Posts posts={posts} newPostText={newPostText} dispatch={dispatch} />
    </section>
  )
}

export default Profile;