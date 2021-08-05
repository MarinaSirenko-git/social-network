import React from 'react';
import Poster from './../Poster/Poster.jsx';
import Posts from '../Posts/Posts.jsx';
import AboutUser from '../AboutUser/AboutUser.jsx';
import './Profile.css';

function Profile({ posts, addPost, newPostText, changeNewPostText }) {
  return(
    <section className="profile">
      <Poster />
      <AboutUser />
      <Posts posts={posts} addPost={addPost} newPostText={newPostText} changeNewPostText={changeNewPostText}/>
    </section>
  )
}

export default Profile;