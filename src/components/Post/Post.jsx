import React from 'react';
import './Post.css'

function Post({ userPhotoPath, text }) {
  return(
    <div className="post">
      <div className="post__user-avatar">
        <img className="post__user-img" src={userPhotoPath} alt="мой аватар" />
      </div>
      <p className="post__text">{text}</p>
    </div>
  )
}

export default Post;