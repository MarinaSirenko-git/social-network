import React from 'react';
import Post from '../Post/Post.jsx';
import './Posts.css';

function Posts() {
  return(
    <div className="post-container">
      <h2 className="post-container__title">Мои посты</h2>
      <form className="post-form">
        <textarea className="post-form__input" type="text" />
        <button className="post-form__btn">Опубликовать</button>
      </form>
      <Post />
    </div>
  )
}

export default Posts;