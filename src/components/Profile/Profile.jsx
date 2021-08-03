import React from 'react';
import Poster from './../Poster/Poster.jsx';
import Posts from '../Posts/Posts.jsx';
import './Profile.css';

function Profile() {
  return(
    <>
      <Poster />
      <div>Ава + описание</div>
      <Posts />
    </>
  )
}

export default Profile;