import React from 'react';
import Post from '../Post/Post.jsx';
import { changePostActionCreator, postsActionCreator } from '../../redux/profileReducer.js';
import './Posts.css';

function Posts({ posts, newPostText, dispatch }) {
  const textariaElement = React.createRef();

  const handleTextariaChange = () => {
    const text = textariaElement.current.value;
    dispatch(changePostActionCreator(text))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postsActionCreator())
  }

  return(
    <div className="post-container">
      <h2 className="post-container__title">Мои посты</h2>
      <form className="post-form" onSubmit={handleFormSubmit}>
        <textarea className="post-form__input" type="text" value={newPostText} onChange={handleTextariaChange} ref={textariaElement} />
        <button type="submit" className="post-form__btn">Опубликовать</button>
      </form>
      { posts.map(p => <Post key={p.id} userPhotoPath={p.userPhotoPath} text={p.text} />) }
    </div>
  )
}

export default Posts;